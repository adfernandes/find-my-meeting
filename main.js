chrome.tabs.query({ url: "*://mail.google.com/*" }, function (result) {

    var count = 0;

    result.forEach(function (tab) {

        count++;

        chrome.tabs.highlight({
            windowId: tab.windowId,
            tabs: tab.index
        }, function (window) { });

        chrome.windows.update(tab.windowId, {
            focused: true,
            drawAttention: true
        }, function (window) { });

    });

    chrome.extension.getBackgroundPage().setBadgeText(count);

});

window.close();
