chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
	console.log(request);
	window.open(`http://localhost:8000/?productURL=${request.url}`, "_blank");
});
