document.addEventListener("DOMContentLoaded", () => {

  const id = parseInt(getDogIdFromURL());

  fetchDogById(id)
    .then(dog => {

      document.getElementById("dog-image").src = dog.first_image_url;
      document.getElementById("dog-image").alt = dog.name;

      document.getElementById("dog-name").textContent = dog.name;

      document.title = `Thank You for Adopting ${dog.name}`;

    })
    .catch(error => {
      console.error("Error loading dog:", error);
    });

});