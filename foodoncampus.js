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

  
function timeToNumber(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes; // Convert time to minutes since midnight
}

function isOpen(openTime, closeTime) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes
    const open = timeToNumber(openTime);
    const close = timeToNumber(closeTime);
    return currentTime >= open && currentTime < close; // Return true if open
}


function displayFoodPlaces(filterOpenOnly = false) {
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous results
  
    const now = new Date();
  
    // Filter food places
    const filteredPlaces = foodPlaces.filter((place) => {
      if (filterOpenOnly) {
        return isOpen(place.openTime, place.closeTime); // Only show open places
      }
      return true; // Show all places
    });
  
    if (filteredPlaces.length === 0) {
      output.innerHTML = "<p>No food places match your criteria.</p>";
      return;
    }
  
    // Display food places
    filteredPlaces.forEach((place) => {
      const status = isOpen(place.openTime, place.closeTime) ? "Open" : "Closed";
      const placeDiv = document.createElement("div");
      placeDiv.className = "food-place";
      placeDiv.innerHTML = `
        <h3>${place.name}</h3>
        <p>Cuisine: ${place.cuisine}</p>
        <p>Location: ${place.location}</p>
        <p>Hours: ${place.openTime} - ${place.closeTime}</p>
        <p>Status: <span style="color: ${status === "Open" ? "green" : "red"}">${status}</span></p>
      `;
      output.appendChild(placeDiv);
    });
}

document.getElementById("showAllButton").addEventListener("click", () => {
    displayFoodPlaces(false); // Show all places
  });
  
document.getElementById("showOpenButton").addEventListener("click", () => {
    displayFoodPlaces(true); // Show only open places
});
  
  // Display all places on page load
displayFoodPlaces(false);
  
  
  