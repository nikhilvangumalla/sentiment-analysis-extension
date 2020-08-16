chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.sendMessage(tab.id, { url: tab.url }, function (response) {
		console.log(response);
	});
});
