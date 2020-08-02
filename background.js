var timeoutId = 0;

function clearBadgeText() {
    chrome.browserAction.setBadgeText({ text: '' });
}

function setBadgeText(count) {

    clearTimeout(timeoutId);
    timeoutId = 0;

    if (count < 2) {

        clearBadgeText();

    } else {

        chrome.browserAction.setBadgeText({ text: count.toString() });
        timeoutId = setTimeout(clearBadgeText, 5000);

    }

}
