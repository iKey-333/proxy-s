const currentUrl = window.location.href;

if (currentUrl != '') {
    chrome.runtime.sendMessage({
        log: "new-log",
        url: currentUrl
    });
}