fetch("components/app_bar.htm").then(function (response) {
	// When the page is loaded convert it to text
	return response.text()
}).then((html) => {
	document.querySelector(".app-bar").innerHTML = html;

	// asign .focus to the good route
	document.querySelectorAll(".app-bar a").forEach(a => {
		if (a.href == document.location) a.className = "focus";
	});

	setTimeout(() => {
		document.querySelector(".splash-screen").style.display = "none";
	}, 300);
}).catch(function (err) {
	console.log('Failed to fetch page: ', err);
});