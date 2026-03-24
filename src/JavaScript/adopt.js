document.addEventListener("DOMContentLoaded", () => {
  const id = parseInt(getDogIdFromURL());

  fetchDogById(id)
    .then(dog => {
      document.getElementById("adopt-title").textContent = `Adopt ${dog.name}`;
      document.title = `Adopt ${dog.name}`;

      document.getElementById("dog-image").src = dog.first_image_url;
      document.getElementById("dog-image").alt = dog.name;
      document.getElementById("dog-name").textContent = dog.name;
    })
    .catch(error => {
      console.error("Error loading dog for adoption page:", error);
    });

  document.getElementById("adoption-form").addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = `thankyou.html?id=${id}`;
  });
});