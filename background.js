chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: 'youtube.com'}
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});

let enabled = false;

chrome.pageAction.onClicked.addListener(function (tab) {
    enabled = !enabled;
    if (enabled) {
        chrome.pageAction.setIcon({path: "icon.png", tabId: tab.id});
        chrome.tabs.executeScript(null, {file: "content.js"});
    }
    else {
        chrome.pageAction.setIcon({path: "grey-icon.png", tabId: tab.id});
        chrome.tabs.executeScript(null, {file: "remove-content.js"});

    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].url, {action: "SendIt"}, function(response) {});
        });
    }
});