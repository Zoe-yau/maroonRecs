const foodPlaces = [
    { name: "Chick-fil-A", cuisine: "Fast Food", openTime: "07:00", closeTime: "20:00", location: "MSC" },
    { name: "Rev's American Grill", cuisine: "American", openTime: "11:00", closeTime: "21:00", location: "Kyle Field" },
    { name: "Piada Italian Street Food", cuisine: "Italian", openTime: "10:30", closeTime: "21:00", location: "MSC" },
    { name: "Houston Street Subs", cuisine: "Sandwiches", openTime: "07:00", closeTime: "15:00", location: "MSC" },
    { name: "Copperhead Jack's", cuisine: "Tex-Mex", openTime: "10:30", closeTime: "19:00", location: "Hullabaloo Hall" },
    { name: "Panda Express", cuisine: "Chinese", openTime: "10:00", closeTime: "20:00", location: "Sbisa Dining Hall" },
    { name: "Shake Smart", cuisine: "Smoothies & Healthy", openTime: "08:00", closeTime: "20:00", location: "Student Rec Center" },
    { name: "The Commons Dining Hall", cuisine: "Buffet", openTime: "07:00", closeTime: "19:30", location: "The Commons" },
    { name: "Aggie Express Convenience Store", cuisine: "Snacks & Drinks", openTime: "07:00", closeTime: "23:00", location: "Multiple Locations" },
    { name: "Einstein Bros Bagels", cuisine: "Bagels & Coffee", openTime: "07:00", closeTime: "14:00", location: "Blocker" },
    { name: "Starbucks", cuisine: "Coffee", openTime: "07:00", closeTime: "22:00", location: "MSC" },
    { name: "Whataburger", cuisine: "Fast Food", openTime: "10:00", closeTime: "23:00", location: "West Campus" },
  ];

  function isOpenNow(place) {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    return place.openTime <= currentTime && place.closeTime >= currentTime;
  }

  function displayPlaces(places) {
    const output = document.getElementById("output");
    output.innerHTML = "";
    console.log("in displayPlaces");
    console.log(places)

    const sortedPlaces = places.sort((a, b) => b.rating - a.rating);


    sortedPlaces.forEach((place, index) => {
      const isOpen = isOpenNow(place);
      const placeDiv = document.createElement("div");
      placeDiv.className = "info-box";
      placeDiv.innerHTML = `
        <h3>${index + 1}. ${place.name}</h3>
        <p><strong>Location:</strong> ${place.location}</p>
        <p><strong>Status:</strong> <span class="${isOpen ? 'open' : 'closed'}">${isOpen ? 'Open' : 'Closed'}</span></p>
      `;
      output.appendChild(placeDiv);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    displayPlaces(foodPlaces);
  });

  document.getElementById("searchButton").addEventListener("click", () => {
    const selectedCuisine = document.getElementById("cuisineDropdown").value.trim();

    const filteredPlaces = selectedCuisine
      ? foodPlaces.filter(
          place => place.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
        )
      : foodPlaces;

    displayPlaces(filteredPlaces);
  });