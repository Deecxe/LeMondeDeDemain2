fetch('bd.json')
  .then(response => response.json())
  .then(data => {

    let myList = document.querySelector(".contenu-actualite");
   
    

    let newElement = document.createElement('div');
    newElement.className = "article";

    let titre = data[0]['text'];
    let newT = document.createElement('h1');
    newT.innerHTML = titre;
    newElement.appendChild(newT);


    for(let i=1; i<5; i++){
      let paragraphe = data[0]['contenu']['0']['paragraphe'+i];
      let newP = document.createElement('p');
      newP.innerHTML = paragraphe;
      newElement.appendChild(newP);
    }


    const imageUrl = data[0].img_url;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = "imgArticle"
    newElement.appendChild(img);
    myList.appendChild(newElement);

  })
  .catch(error => console.error(error));
