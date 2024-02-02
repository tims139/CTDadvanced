const url = 'https://api.thedogapi.com/v1/breeds?limit=10&page=0';
const api_key = "live_0YFPFPV7Z65R1srW9CnSym9n9atXTYWqitiNjJWCC0lbw9tYw8GVCzoBcOYzgTPf";

fetch(url, {
  headers: {
    "x-api-key": api_key,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const breedsContainer = document.getElementById("breeds");
    const detailsContainer = document.getElementById("details");

    data.forEach((breed, index) => {
      const breedContainer = document.createElement("div");
      breedContainer.classList.add("breed-container");

      const image = document.createElement("img");
      image.src = breed.image.url;

      const breedName = document.createElement("p");
      breedName.textContent = breed.name;

      breedContainer.appendChild(image);
      breedContainer.appendChild(breedName);
      breedsContainer.appendChild(breedContainer);

      breedContainer.addEventListener("click", (e) => {
        e.preventDefault();
        breedsContainer.style.display = "none";
        detailsContainer.style.display = "block";
        detailsContainer.innerHTML = `
												<h1>${breed.name}</h1>
												<p><img src = "${breed.image.url}" /></p>
                        <p><strong>Breed group:</strong> ${breed.breed_group}</p>
                        <p><strong>Life span:</strong> ${breed.life_span}</p>
                        <p><strong>Temperament:</strong> ${breed.temperament}</p>
                        <p><strong>Origin:</strong> ${breed.origin}</p>
                        <button id="backButton">← Back</button>
                    `;
        const backButton = document.getElementById("backButton");
				console.log(breed);
        backButton.addEventListener("click", () => {
          breedsContainer.style.display = "flex";
          detailsContainer.style.display = "none";
        });
      });
    });
  });