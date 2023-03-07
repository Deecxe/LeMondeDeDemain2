fetch('bd.json')

  .then(response => response.json())
  .then(data => {
    const premierElement = data[0];
    console.log(premierElement);
  })
  .catch(error => console.error(error));