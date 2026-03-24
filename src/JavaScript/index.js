document.addEventListener("DOMContentLoaded", () => {
  fetchAllDogs()
    .then(dogs => {
      const cards = document.querySelectorAll(".dog-card");

      cards.forEach((card, index) => {
        const dog = dogs[index];
        if (!dog) return;

        const img = card.querySelector("img");
        const title = card.querySelector("h2");
        const link = card.querySelector("a");

        img.src = dog.first_image_url;
        img.alt = dog.name;
        title.textContent = dog.name;
        link.href = `dog.html?id=${index+1}`;
      });
    })
    .catch(error => {
      console.error("Error loading dogs:", error);
    });
});