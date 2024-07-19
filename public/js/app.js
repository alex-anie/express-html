// const { response } = require("express");

// fetching snacks data from the API and render it
fetch("/api/snacks")
  .then((response) => response.json())
  .then((data) => {
    const snacksContainer = document.getElementById("snacks-container");
    data.forEach((snack) => {
      const snackElement = document.createElement("div");
      snackElement.innerHTML = `<div class="card-order">
      <img src="${snack.image}" alt="${snack.snack}" />
      <h2>${snack.snack}</h2>

      </div>
      `;
      snacksContainer.appendChild(snackElement);
    });
  })
  .catch((error) => console.error("Error fetching snacks: ", error));
