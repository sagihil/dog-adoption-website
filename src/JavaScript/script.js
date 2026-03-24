const BASE_URL = "https://6b55b9e1-1cb3-47bf-a9ba-14e0ec333fc8.mock.pstmn.io";

function fetchAllDogs() {
  return fetch(`${BASE_URL}/dogs`)
    .then(response => response.json());
}

function fetchDogById(id) {
  return fetch(`${BASE_URL}/dogs/${Number(id)+1}`)
    .then(response => response.json());
}

function getDogIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function formatBoolean(value) {
  if (value === true) return "Yes";
  if (value === false) return "No";
  return "Unknown";
}