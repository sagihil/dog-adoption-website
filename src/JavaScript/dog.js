document.addEventListener("DOMContentLoaded", () => {
const id = parseInt(getDogIdFromURL());

    // בדיקה איזה ID מגיע מהקישור
    console.log("ID from URL:", id);

    fetchDogById(id)
        .then(dog => {

            // בדיקה מה ה-API באמת מחזיר
            console.log("Dog object from API:", dog);

            document.getElementById("dog-title").textContent =
                `${dog.name} Details`;

            document.title = `${dog.name} Details`;

            document.getElementById("dog-image").src = dog.first_image_url;
            document.getElementById("dog-image").alt = dog.name;

            document.getElementById("dog-name").textContent = dog.name;
            document.getElementById("dog-breed").textContent = dog.breed;
            document.getElementById("dog-age").textContent = dog.age;
            document.getElementById("dog-sex").textContent = dog.sex;


            document.getElementById("dog-house-trained").textContent =
                formatBoolean(dog.house_trained);

            document.getElementById("vaccinated").textContent =
                formatBoolean(dog.vaccinated);   

            document.getElementById("dog-story").textContent = dog.story;

            document.getElementById("adopt-link").href = `adopt.html?id=${id}`;

            // ניווט בין כלבים
            const prevBtn = document.getElementById("prev-btn");
            const nextBtn = document.getElementById("next-btn");

            if (id === 0) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.href = `dog.html?id=${id - 1}`;
            }

            if (id === 5) {
                nextBtn.style.display = "none";
            } else {
                nextBtn.href = `dog.html?id=${id + 1}`;
            }

        })

        .catch(error => {
            console.error("Error loading dog details:", error);
        });
});