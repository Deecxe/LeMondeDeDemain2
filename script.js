fetch("components/app_bar.htm").then(function (response) {
	// When the page is loaded convert it to text
	return response.text()
}).then((html) => {
	document.querySelector(".app-bar").innerHTML = html;
}).catch(function (err) {
	console.log('Failed to fetch page: ', err);
});