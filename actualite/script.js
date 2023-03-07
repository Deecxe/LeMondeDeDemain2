fetch("bd.json").then(function (response) {
    // When the page is loaded convert it to text
    return response.text()
}).then((json) => {
    let myList = document.querySelector(".list-actualities");

    let res = JSON.parse(json);

    res.forEach(news => {
        let newElement = document.createElement('div');
        newElement.className = "actualite";

        let newImg = document.createElement('img');
        newImg.src = news.img_url;
        newImg.alt = "";

        let newDiv = document.createElement('div');
        newDiv.innerHTML = news.text;

        /*let newTag = document.createElement('div');
        newTag.innerHTML = news.tags;*/

        newElement.appendChild(newImg);
        newElement.appendChild(newDiv);
        //newElement.appendChild(newTag);

        // Ajouter un événement de clic sur l'image
        newImg.addEventListener("click", function() {
            // Code à exécuter lors du clic sur l'image
            document.location.href="article.html";
        });

        myList.appendChild(newElement);
    });
}).catch(function (err) {
    console.log('Failed to fetch page: ', err);
});