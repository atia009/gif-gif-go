function generateImage(field = "dog") {
  const img = document.querySelector("img");
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=z4Q6aWFpoFeVBHp9mnmPPOmpENLtL8rG&s=${field}`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });
}

export default generateImage;
