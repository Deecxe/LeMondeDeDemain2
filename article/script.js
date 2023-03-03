fetch(".bd.json").then(function (response) {
    // When the page is loaded convert it to text
    return response.text()
}).then((json) => {
    let myList = document.querySelector(".contenu-actualite");

    let res = JSON.parse(json);

    news => {
    let newElement = document.createElement('div');
    newElement.className = "contenu-article";

    newElement.innerHTML = `<img src="" alt=""><div><div>`;

    newElement.querySelector('img').src = news.img_url;

    newElement.querySelector('div').innerHTML = news.content[0];
    };


        myList.appendChild(newElement);
}).catch(function (err) {
    console.log('Failed to fetch page: ', err);
});