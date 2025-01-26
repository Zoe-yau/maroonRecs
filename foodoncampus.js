const foodPlaces = [
  {
    name: "The Commons Dining Hall",
    cuisine: "All-You-Care-To-Eat",
    schedule: {
      Sunday: "9:00a - 2:00p, 5:00p - 8:00p",
      Monday: "7:00a - 2:30p, 5:00p - 9:00p",
      Tuesday: "7:00a - 2:30p, 5:00p - 9:00p",
      Wednesday: "7:00a - 2:30p, 5:00p - 9:00p",
      Thursday: "7:00a - 2:30p, 5:00p - 9:00p",
      Friday: "7:00a - 2:30p, 5:00p - 8:00p",
      Saturday: "9:00a - 2:00p, 5:00p - 8:00p"
    },
    location: "South Campus"
  },
  {
    name: "Sbisa Dining Hall",
    cuisine: "All-You-Care-To-Eat",
    schedule: {
      Sunday: "10:00a - 2:00p, 5:00p - 8:00p",
      Monday: "7:00a - 2:30p, 5:00p - 8:00p",
      Tuesday: "7:00a - 2:30p, 5:00p - 8:00p",
      Wednesday: "7:00a - 2:30p, 5:00p - 8:00p",
      Thursday: "7:00a - 2:30p, 5:00p - 8:00p",
      Friday: "7:00a - 2:30p, 5:00p - 8:00p",
      Saturday: "10:00a - 2:00p, 5:00p - 8:00p"
    },
    location: "North Campus"
  },
  {
    name: "Duncan Dining Hall",
    cuisine: "All-You-Care-To-Eat",
    schedule: {
      Sunday: "Closed",
      Monday: "11:00a - 1:00p",
      Tuesday: "11:00a - 1:00p",
      Wednesday: "11:00a - 1:00p",
      Thursday: "11:00a - 1:00p, 5:00p - 8:00p",
      Friday: "11:00a - 1:00p",
      Saturday: "Closed"
    },
    location: "South Campus/Quad"
  },
  {
    name: "1876 Burgers",
    cuisine: "Burgers",
    schedule: {
      Sunday: "Closed",
      Monday: "10:30a - 8:00p",
      Tuesday: "10:30a - 8:00p",
      Wednesday: "10:30a - 8:00p",
      Thursday: "10:30a - 8:00p",
      Friday: "10:30a - 7:00p",
      Saturday: "Closed"
    },
    location: "Sbisa Complex"
  },
  {
    name: "Aggie Express",
    cuisine: "Convenience Store",
    schedule: {
      Sunday: "9:00a - 12:00a",
      Monday: "8:00a - 12:00a",
      Tuesday: "8:00a - 12:00a",
      Wednesday: "8:00a - 12:00a",
      Thursday: "8:00a - 12:00a",
      Friday: "8:00a - 12:00a",
      Saturday: "8:00a - 12:00a"
    },
    location: "Hullabaloo"
  },
  {
    name: "Chick-fil-A",
    cuisine: "Fast Food",
    schedule: {
      Sunday: "Closed",
      Monday: "10:15a - 10:00p",
      Tuesday: "10:15a - 10:00p",
      Wednesday: "10:15a - 10:00p",
      Thursday: "10:15a - 10:00p",
      Friday: "10:15a - 8:00p",
      Saturday: "11:00a - 3:00p"
    },
    location: "Sbisa Underground Food Court"
  },
  {
    name: "Copperhead Jack's",
    cuisine: "Tex-Mex",
    schedule: {
      Sunday: "Closed",
      Monday: "10:30a - 8:00p",
      Tuesday: "10:30a - 8:00p",
      Wednesday: "10:30a - 8:00p",
      Thursday: "10:30a - 8:00p",
      Friday: "10:30a - 7:00p",
      Saturday: "Closed"
    },
    location: "Sbisa Complex"
  },
  {
    name: "Starbucks",
    cuisine: "Coffee",
    schedule: {
      Sunday: "9:00a - 6:00p",
      Monday: "7:00a - 8:00p",
      Tuesday: "7:00a - 8:00p",
      Wednesday: "7:00a - 8:00p",
      Thursday: "7:00a - 8:00p",
      Friday: "7:00a - 6:00p",
      Saturday: "8:00a - 4:00p"
    },
    location: "Hullabaloo"
  },
  {
    name: "Smoothie King",
    cuisine: "Smoothies",
    schedule: {
      Sunday: "12:00p - 6:00p",
      Monday: "10:00a - 8:00p",
      Tuesday: "10:00a - 8:00p",
      Wednesday: "10:00a - 8:00p",
      Thursday: "10:00a - 8:00p",
      Friday: "10:00a - 8:00p",
      Saturday: "12:00p - 6:00p"
    },
    location: "Sbisa Underground Food Court"
  },
  {
    name: "Abu Omar Halal",
    cuisine: "Halal",
    schedule: {
      Sunday: "11:00a - 5:00p",
      Monday: "10:00a - 8:00p",
      Tuesday: "10:00a - 8:00p",
      Wednesday: "10:00a - 8:00p",
      Thursday: "10:00a - 8:00p",
      Friday: "10:00a - 8:00p",
      Saturday: "11:00a - 5:00p"
    },
    location: "MSC"
  },
  {
    name: "Starbucks Coffee - Evans Library",
    cuisine: "Coffee",
    schedule: {
      Sunday: "12:00p - 6:00p",
      Monday: "7:30a - 10:00p",
      Tuesday: "7:30a - 10:00p",
      Wednesday: "7:30a - 10:00p",
      Thursday: "7:30a - 10:00p",
      Friday: "7:30a - 5:00p",
      Saturday: "Closed"
    },
    location: "Evans Library"
  },
  {
    name: "Smoothie King - MSC",
    cuisine: "Smoothies",
    schedule: {
      Sunday: "12:00p - 10:00p",
      Monday: "10:00a - 10:00p",
      Tuesday: "10:00a - 10:00p",
      Wednesday: "10:00a - 10:00p",
      Thursday: "10:00a - 10:00p",
      Friday: "10:00a - 8:00p",
      Saturday: "12:00p - 8:00p"
    },
    location: "MSC"
  },
  {
    name: "Spin 'N Stone Pizza",
    cuisine: "Pizza",
    schedule: {
      Sunday: "Closed",
      Monday: "10:00a - 3:00p",
      Tuesday: "10:00a - 3:00p",
      Wednesday: "10:00a - 3:00p",
      Thursday: "10:00a - 3:00p",
      Friday: "10:00a - 3:00p",
      Saturday: "Closed"
    },
    location: "MSC"
  },
  {
    name: "The University Club",
    cuisine: "American",
    schedule: {
      Sunday: "Closed",
      Monday: "Closed",
      Tuesday: "11:00a - 2:00p",
      Wednesday: "11:00a - 2:00p",
      Thursday: "11:00a - 2:00p",
      Friday: "11:00a - 2:00p",
      Saturday: "Closed"
    },
    location: "MSC"
  },
  {
    name: "Whoop Coop",
    cuisine: "Convenience Store",
    schedule: {
      Sunday: "2:00p - 8:00p",
      Monday: "11:00a - 8:00p",
      Tuesday: "11:00a - 8:00p",
      Wednesday: "11:00a - 8:00p",
      Thursday: "11:00a - 8:00p",
      Friday: "11:00a - 8:00p",
      Saturday: "11:00a - 8:00p"
    },
    location: "South Campus"
  },
  {
    name: "Aggie Express - Commons",
    cuisine: "Convenience Store",
    schedule: {
      Sunday: "9:00a - 2:00a",
      Monday: "7:00a - 2:00a",
      Tuesday: "7:00a - 2:00a",
      Wednesday: "7:00a - 2:00a",
      Thursday: "7:00a - 2:00a",
      Friday: "7:00a - 11:00p",
      Saturday: "9:00a - 11:00p"
    },
    location: "Commons"
  },
  {
    name: "Starbucks Coffee - The Quad",
    cuisine: "Coffee",
    schedule: {
      Sunday: "9:00a - 6:00p",
      Monday: "7:00a - 8:00p",
      Tuesday: "7:00a - 8:00p",
      Wednesday: "7:00a - 8:00p",
      Thursday: "7:00a - 8:00p",
      Friday: "7:00a - 6:00p",
      Saturday: "8:00a - 4:00p"
    },
    location: "The Quad"
  },
  {
    name: "Houston Street Subs - Southside",
    cuisine: "Subs",
    schedule: {
      Sunday: "2:00p - 8:00p",
      Monday: "11:00a - 8:00p",
      Tuesday: "11:00a - 8:00p",
      Wednesday: "11:00a - 8:00p",
      Thursday: "11:00a - 8:00p",
      Friday: "11:00a - 8:00p",
      Saturday: "11:00a - 8:00p"
    },
    location: "East Campus"
  },
  {
    name: "Azimuth Cafe - Langford",
    cuisine: "Cafe",
    schedule: {
      Sunday: "Closed",
      Monday: "7:30a - 3:00p",
      Tuesday: "7:30a - 3:00p",
      Wednesday: "7:30a - 3:00p",
      Thursday: "7:30a - 3:00p",
      Friday: "7:30a - 3:00p",
      Saturday: "Closed"
    },
    location: "Langford"
  },
  {
    name: "Food Truck Row",
    cuisine: "Varied",
    schedule: {
      Sunday: "Closed",
      Monday: "11:00a - 2:00p",
      Tuesday: "11:00a - 2:00p",
      Wednesday: "11:00a - 2:00p",
      Thursday: "11:00a - 2:00p",
      Friday: "11:00a - 2:00p",
      Saturday: "Closed"
    },
    location: "Various Locations"
  },
  {
    name: "Houston Street Subs - Polo Garage",
    cuisine: "Subs",
    schedule: {
      Sunday: "Closed",
      Monday: "8:00a - 3:00p",
      Tuesday: "8:00a - 3:00p",
      Wednesday: "8:00a - 3:00p",
      Thursday: "8:00a - 3:00p",
      Friday: "8:00a - 3:00p",
      Saturday: "Closed"
    },
    location: "Polo Garage"
  },
  {
    name: "Market at Polo Garage",
    cuisine: "Convenience Store",
    schedule: {
      Sunday: "Closed",
      Monday: "8:00a - 5:00p",
      Tuesday: "8:00a - 5:00p",
      Wednesday: "8:00a - 5:00p",
      Thursday: "8:00a - 5:00p",
      Friday: "8:00a - 3:00p",
      Saturday: "Closed"
    },
    location: "Polo Garage"
  }, 
    {
      name: "Panda Express",
      cuisine: "Fast Food",
      schedule: {
        Sunday: "Closed",
        Monday: "11:00a - 8:00p",
        Tuesday: "11:00a - 8:00p",
        Wednesday: "11:00a - 8:00p",
        Thursday: "11:00a - 8:00p",
        Friday: "11:00a - 8:00p",
        Saturday: "Closed"
      },
      location: "Polo Garage"
    },
    {
      name: "Salata",
      cuisine: "American",
      schedule: {
        Sunday: "Closed",
        Monday: "11:00a - 8:00p",
        Tuesday: "11:00a - 8:00p",
        Wednesday: "11:00a - 8:00p",
        Thursday: "11:00a - 8:00p",
        Friday: "11:00a - 8:00p",
        Saturday: "Closed"
      },
      location: "Main Campus"
    },
    {
      name: "Shake Smart",
      cuisine: "Smoothies",
      schedule: {
        Sunday: "Closed",
        Monday: "8:00a - 8:30p",
        Tuesday: "8:00a - 8:30p",
        Wednesday: "8:00a - 8:30p",
        Thursday: "8:00a - 8:30p",
        Friday: "8:00a - 8:30p",
        Saturday: "Closed"
      },
      location: "Polo Garage"
    },
    {
      name: "Starbucks Coffee",
      cuisine: "Coffee",
      schedule: {
        Sunday: "Closed",
        Monday: "7:30a - 7:00p",
        Tuesday: "7:30a - 7:00p",
        Wednesday: "7:30a - 7:00p",
        Thursday: "7:30a - 7:00p",
        Friday: "7:30a - 5:00p",
        Saturday: "Closed"
      },
      location: "Zachry"
    },
    {
      name: "Reynolds and Reynolds Cafe",
      cuisine: "American",
      schedule: {
        Sunday: "Closed",
        Monday: "7:00a - 6:00p",
        Tuesday: "7:00a - 6:00p",
        Wednesday: "7:00a - 6:00p",
        Thursday: "7:00a - 6:00p",
        Friday: "7:00a - 6:00p",
        Saturday: "Closed"
      },
      location: "West Campus"
    },
    {
      name: "ILSQ Food Truck",
      cuisine: "Halal",
      schedule: {
        Sunday: "Closed",
        Monday: "11:00a - 2:00p",
        Tuesday: "Closed",
        Wednesday: "11:00a - 2:00p",
        Thursday: "Closed",
        Friday: "11:00a - 2:00p",
        Saturday: "Closed"
      },
      location: "Main Campus"
    },
    {
      name: "Chick-fil-A",
      cuisine: "Fast Food",
      schedule: {
        Sunday: "Closed",
        Monday: "10:00a - 6:00p",
        Tuesday: "10:00a - 6:00p",
        Wednesday: "10:00a - 6:00p",
        Thursday: "10:00a - 6:00p",
        Friday: "10:00a - 3:00p",
        Saturday: "Closed"
      },
      location: "West Campus Food Hall"
    },
    {
      name: "Copperhead Jack's",
      cuisine: "Tex-Mex",
      schedule: {
        Sunday: "Closed",
        Monday: "10:30a - 3:00p",
        Tuesday: "10:30a - 3:00p",
        Wednesday: "10:30a - 3:00p",
        Thursday: "10:30a - 3:00p",
        Friday: "10:30a - 3:00p",
        Saturday: "Closed"
      },
      location: "West Campus Food Hall"
    },
    {
      name: "Creekside Market",
      cuisine: "Convenience Store",
      schedule: {
        Sunday: "10:00a - 12:00a",
        Monday: "7:00a - 12:00a",
        Tuesday: "7:00a - 12:00a",
        Wednesday: "7:00a - 12:00a",
        Thursday: "7:00a - 12:00a",
        Friday: "7:00a - 10:00p",
        Saturday: "10:00a - 10:00p"
      },
      location: "Creekside"
    },
    {
      name: "The Kitchen - Creekside Market",
      cuisine: "American",
      schedule: {
        Sunday: "5:00p - 10:00p",
        Monday: "11:00a - 10:00p",
        Tuesday: "11:00a - 10:00p",
        Wednesday: "11:00a - 10:00p",
        Thursday: "11:00a - 10:00p",
        Friday: "Closed",
        Saturday: "Closed"
      },
      location: "Creekside"
    } 
  ];
// Helper function to determine if a place is currently open
function isOpenNow(place) {
  const now = new Date();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  const todaySchedule = place.schedule[currentDay];

  if (todaySchedule === "Closed") {
    return false; // Place is closed for the entire day
  }

  // Split the schedule into individual time ranges
  const timeRanges = todaySchedule.split(", ").map(range => range.trim());

  // Check if the current time falls within any of the time ranges
  return timeRanges.some(range => {
    const [start, end] = range.split(" - ").map(convertTo24Hour);
    return start <= currentTime && end >= currentTime;
  });
}

// Helper function to convert 12-hour time to 24-hour format
function convertTo24Hour(time) {
  const [hourMinute, period] = [time.slice(0, -1), time.slice(-1)];
  let [hour, minute] = hourMinute.split(":").map(Number);

  if (period === "p" && hour !== 12) hour += 12; // Add 12 hours for PM, except 12 PM
  if (period === "a" && hour === 12) hour = 0; // Convert 12 AM to 00

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

// Function to display food places in the output container
function displayPlaces(places) {
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous results

  // Sort the places so open ones appear first
  const sortedPlaces = places.sort((a, b) => {
    const isOpenA = isOpenNow(a);
    const isOpenB = isOpenNow(b);
    return isOpenB - isOpenA; // Places that are open will appear first
  });

  sortedPlaces.forEach((place, index) => {
    const isOpen = isOpenNow(place); // Determine if the place is open
    const placeDiv = document.createElement("div");
    placeDiv.className = "info-box";

    let scheduleHTML = "<strong>Schedule:</strong><ul>";
    for (const day in place.schedule) {
      scheduleHTML += `<li><strong>${day}:</strong> ${place.schedule[day]}</li>`;
    }
    scheduleHTML += "</ul>";

    placeDiv.innerHTML = `
      <h3> ${index + 1}. ${place.name}</h3>
      <p><strong>Location:</strong> ${place.location}</p>
      <p><strong>Status:</strong> <span class="${isOpen ? 'open' : 'closed'}">${isOpen ? 'Open' : 'Closed'}</span></p>
      <p><strong>Cuisine:</strong> ${place.cuisine}</p>
      ${scheduleHTML}
    `;

    output.appendChild(placeDiv);
  });
}

// Filter logic for Search button
document.getElementById("searchButton").addEventListener("click", () => {
  const selectedCuisine = document.getElementById("cuisineDropdown").value.trim();
  const selectedStatus = document.getElementById("statusDropdown").value.trim();

  let filteredPlaces = foodPlaces;

  // Filter by cuisine if a cuisine is selected
  if (selectedCuisine) {
    filteredPlaces = filteredPlaces.filter(
      place => place.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
    );
  }

  // Filter by status (Open or Closed) if a status is selected
  if (selectedStatus === "Open") {
    filteredPlaces = filteredPlaces.filter(place => isOpenNow(place));
  } else if (selectedStatus === "Closed") {
    filteredPlaces = filteredPlaces.filter(place => !isOpenNow(place));
  }

  // Display the filtered places
  displayPlaces(filteredPlaces);
});

// Initial display of all food places on page load
document.addEventListener("DOMContentLoaded", () => {
  displayPlaces(foodPlaces); // Show all places by default with open ones ranked first
});
