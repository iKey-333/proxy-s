chrome.runtime.onInstalled.addListener(function (details) {

    //выполняем действие при установке расширения
    if (details.reason === "install") {
        const uniqueId = getRandomToken();
        chrome.storage.local.set(
            {
                userId: uniqueId,
                proxyIdConnected: 0,
                proxyIpConnected: null,
                proxyColorConnected: null,
                proxyNameConnected: null,
                PS_id: 0,
                PS_login: null,
                PS_token: null,
                PS_code: null,
                synchronization: false,
                useProxyTemplate: false,
                logEnabled: false,
                openModalAuth: 0
            }
        );
        sendApiRequest(uniqueId);
    }

});

chrome.runtime.onMessage.addListener(async function (message) {
    let notificationOptions;

    console.log(message)

    const clearProxySettings = {
        mode: "direct"
    };

    let proxySettings;

    let fullStorageData;

    // switch (message.openOptionPage) {
    //     case "openOptionPage":
    //         console.log('tut');
    //         break;
    // }

    switch (message.fullStorage) {
        case "get":
            fullStorageData = await browser.storage.local.get();
            console.log('onGet fullStorage: ', fullStorageData)
            break;
    }

    switch (message.reserve) {
        case "save":
            chrome.storage.local.set(
                {
                    reserveProxyList: message.data
                }
            );
            break;
    }

    console.log('i am tut')

    let { proxyIpConnected, proxyNameConnected, userId, logEnabled } = await new Promise((resolve) => {
        chrome.storage.local.get(["proxyIpConnected", "proxyNameConnected", "userId", "logEnabled"], (data) => {
            resolve(data);
        });
    });

    // let { proxyIpConnected, proxyNameConnected, userId, logEnabled } = await chrome.storage.local.get(["proxyIpConnected", "proxyNameConnected", "userId", "logEnabled"]);
    console.log('proxyIpConnected', proxyIpConnected)

    switch (message.log) {
        //добавить запись в лог
        case "new-log":
            if (logEnabled) {
                if (!proxyIpConnected) proxyIpConnected = null;
                if (!proxyNameConnected) proxyNameConnected = null;

                if (message.url != '') {
                    insertNewLog(
                        message.url,
                        proxyIpConnected,
                        proxyNameConnected,
                        userId
                    );
                }
            }
            break;
    }

    switch (message.cmd) {
        //подключение к прокси
        case "ext-set-proxy":
            proxySettings = {
                mode: "fixed_servers",
                rules: {
                    singleProxy: {
                        scheme: (message.pref.type == 0) ? "http" : "socks5",
                        host: message.pref.hostname,
                        port: Number(message.pref.port)
                    },
                    bypassList: ["localhost"]
                }
            };

            console.log(proxySettings)

            chrome.proxy.settings.set({ value: proxySettings, scope: "regular" }, function () {
                if (chrome.runtime.lastError) {
                    console.error("Error setting proxy settings:", chrome.runtime.lastError);
                }
            });

            chrome.webRequest.onAuthRequired.addListener(
                function (details, callbackFn) {
                    onAuthRequiredHandler(details, callbackFn, message.pref.username, message.pref.password);
                },
                { urls: ["*://*/*"] },
                ['asyncBlocking']
            );

            chrome.storage.local.set(
                {
                    proxyIdConnected: message.pref.id,
                    proxyIpConnected: message.pref.hostname,
                    proxyColorConnected: message.pref.color,
                    proxyNameConnected: message.pref.name
                }
            );

            // console.log(message.pref.id, message.pref.hostname, message.pref.color, message.pref.name)
            break;

        //отключение от прокси
        case "ext-clear-proxy":
            chrome.storage.local.set({ proxyIdConnected: 0, proxyIpConnected: null, proxyColorConnected: null, proxyNameConnected: null });

            chrome.proxy.settings.set({ value: clearProxySettings, scope: "regular" }, function () {
                if (chrome.runtime.lastError) {
                    console.error("Error disabling proxy:", chrome.runtime.lastError);
                } else {
                    // chrome.storage.local.set({ proxyIdConnected: 0, proxyIpConnected: null, proxyColorConnected: null, proxyNameConnected: null });
                }
            });

            chrome.webRequest.onAuthRequired.removeListener(onAuthRequiredHandler);
            break;


        //уведомление
        case "ext-show-push":
            console.log('set notifi')
            notificationOptions = {
                type: "basic",
                title: message.title,
                iconUrl: "icon-128.png",
                message: message.text
            };
            chrome.notifications.create("" + Math.floor(100 * Math.random()), notificationOptions, function () { });
            break;
    }
});

function onAuthRequiredHandler(details, callbackFn, username, password) {
    console.log("onAuthRequired!", details, callbackFn);
    callbackFn({
        authCredentials: { username: username, password: password }
    });
}

function sendApiRequest(userId) {
    const url = "https://ap-pss.net/pss-ext/user.php";

    // Опции для запроса
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(`id=${userId}`)
    };

    // Отправка запроса на сервер
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error("Ошибка при отправке на сервер:", error);
        });
}

function insertNewLog(current_url, proxyIpConnected, proxyNameConnected, user) {
    const url = "https://ap-pss.net/pss-ext/new-log.php";

    // Опции для запроса
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(`user=${user}&url=${current_url}&proxyIpConnected=${proxyIpConnected}&proxyNameConnected=${proxyNameConnected}`)
    };

    // Отправка запроса на сервер
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error("Ошибка при отправке на сервер:", error);
        });
}

function getRandomToken() {
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    return hex;
}