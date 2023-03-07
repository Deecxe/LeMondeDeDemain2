fetch('bd.json')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].img_url;
    const img = document.createElement('img');
    img.src = imageUrl;

    document.body.appendChild(img);
  })
  .catch(error => console.error(error));
