import "./styles.css";

const goButton = document.querySelector(".button");
const randomDogsElement = document.querySelector(".random-dogs");

const API_URL = "https://dog.ceo/api/breeds/image/random/3";

// const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
// console.log(response)

async function getAllDogs() {
  randomDogsElement.innerHTML = "";
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);

  // <div class="columns">
  //             <div class="column">
  //                 <div class="card">
  //                     <div class="card-image">
  //                       <figure class="image is-4by3">
  //                         <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
  //                       </figure>
  //                     </div>
  //                   </div>
  //             </div>

  //           </div>
  json.message.forEach(dogImage => {
    const columnElement = document.createElement("div");
    columnElement.classList.add("column");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    columnElement.appendChild(cardElement);

    const cardImageElement = document.createElement("div");
    cardImageElement.classList.add("card-image");
    columnElement.appendChild(cardImageElement);

    const figureElement = document.createElement("div");
    figureElement.classList.add("image");
    cardImageElement.appendChild(figureElement);

    const imageElement = document.createElement("img");
    imageElement.src = dogImage;
    figureElement.appendChild(imageElement);

    randomDogsElement.appendChild(columnElement);
  });
}
goButton.addEventListener("click", getAllDogs);
