export default async function eUserGet() {
    let myBrowser;

    if (process.env.VUE_APP_BROWSER === 'firefox') {
        myBrowser = browser;
    } else if (process.env.VUE_APP_BROWSER === 'chrome') {
        myBrowser = chrome;
    }

    // // const storageData = await myBrowser.storage.local.get();
    // // console.log(storageData);

    // chrome.runtime.sendMessage({
    //     fullStorage: "get"
    // });

    const { PS_id, PS_login, PS_token, PS_code } = await myBrowser.storage.local.get(["PS_id", "PS_login", "PS_token", "PS_code"]);
    return { PS_id, PS_login, PS_token, PS_code }
}