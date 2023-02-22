fetch("bd.json").then(function (response) {
    // When the page is loaded convert it to text
    return response.text()
}).then((json) => {
    let myList = document.querySelector(".list-actualities");

    let res = JSON.parse(json);

    res.forEach(news => {
        let newElement = document.createElement('div');
        newElement.className = "actualite";

        newElement.innerHTML = `<img src="" alt=""><div><div>`;

        newElement.querySelector('img').src = news.img_url;

        newElement.querySelector('div').innerHTML = news.text;



        myList.appendChild(newElement);
    });
}).catch(function (err) {
    console.log('Failed to fetch page: ', err);
});