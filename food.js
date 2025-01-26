const output = document.querySelector("#output");

const foodPlaces = [
    { name: "Layne's Chicken Fingers", cuisine: "Fast Food", rating: 4.6, reviewsCount: 2154, review: "Amazing chicken fingers and the secret sauce is to die for. A must-visit for Aggies!" },
    { name: "Fuego Tortilla Grill", cuisine: "Mexican", rating: 4.7, reviewsCount: 3951, review: "Best tacos in town, open 24/7. The Dr Pepper Cowboy taco is a favorite." },
    { name: "Dixie Chicken", cuisine: "Bar & Grill", rating: 4.5, reviewsCount: 1523, review: "Great place to hang out, drink beer, and enjoy some southern-style food." },
    { name: "Mad Taco", cuisine: "Mexican Fusion", rating: 4.4, reviewsCount: 845, review: "Delicious tacos with a modern twist. Try the brisket taco with their spicy salsa." },
    { name: "Blue Baker", cuisine: "Bakery & Cafe", rating: 4.7, reviewsCount: 1023, review: "Freshly baked bread and amazing sandwiches. The jalapeño cheddar bread is a winner." },
    { name: "Razzoo's Cajun Cafe", cuisine: "Cajun", rating: 4.4, reviewsCount: 643, review: "Great Cajun food with bold flavors. The crawfish étouffée is excellent." },
    { name: "Grub Burger Bar", cuisine: "Burgers", rating: 4.5, reviewsCount: 1953, review: "Creative burger options with great sides. The Scorpion Burger is a spicy treat!" },
    { name: "Blackwater Draw Brewing Co.", cuisine: "Brewery & American", rating: 4.6, reviewsCount: 542, review: "Good craft beers and solid pub food. The pulled pork sandwich is a must-try." },
    { name: "Napa Flats Wood-Fired Kitchen", cuisine: "Italian", rating: 4.6, reviewsCount: 973, review: "Fresh wood-fired pizzas and pastas. The gelato here is the perfect dessert." },
    { name: "Sweet Paris Crêperie & Café", cuisine: "French", rating: 4.5, reviewsCount: 789, review: "Lovely place for sweet and savory crepes. The Nutella crepe is heavenly." },
    { name: "All the King's Men", cuisine: "Barbecue", rating: 4.7, reviewsCount: 854, review: "Amazing BBQ with great beer options. The brisket is melt-in-your-mouth good." },
    { name: "Taz Indian Cuisine", cuisine: "Indian", rating: 4.4, reviewsCount: 328, review: "Authentic Indian food with a great selection. The butter chicken is fantastic." },
    { name: "Ohana Korean Grill", cuisine: "Korean", rating: 4.6, reviewsCount: 489, review: "Delicious Korean BBQ with fresh ingredients. The bulgogi is a standout dish." },
    { name: "First Watch", cuisine: "Breakfast & Brunch", rating: 4.7, reviewsCount: 1123, review: "Healthy and hearty breakfast options. The avocado toast is a customer favorite." },
    { name: "RX Pizza", cuisine: "Pizza", rating: 4.8, reviewsCount: 1345, review: "Arguably the best pizza in town. The pesto chicken pizza is highly recommended." }
  ];
  
  // Event listener for button click
  document.getElementById("searchButton").addEventListener("click", () => {
    const userInput = document.getElementById("cuisineInput").value.trim().toLowerCase();
    const output = document.getElementById("output");
  
    // Clear previous results
    output.innerHTML = "";
  
    // Filter and rank the data
    const filteredPlaces = foodPlaces
      .filter(place => place.cuisine.toLowerCase().includes(userInput)) // Filter by cuisine
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating; // Sort by rating (desc)
        }
        return b.reviewsCount - a.reviewsCount; // Sort by reviews count (desc)
      });
  
    // Handle no results
    if (filteredPlaces.length === 0) {
      output.innerHTML = `<p>No food places found for the cuisine "${userInput}". Try another cuisine!</p>`;
      return;
    }
  
    // Display results
    filteredPlaces.forEach((place, index) => {
      const placeDiv = document.createElement("div");
      placeDiv.className = "food-place";
      placeDiv.innerHTML = `
        <h3>${index + 1}. ${place.name}</h3>
        <p>Cuisine: ${place.cuisine}</p>
        <p>Rating: ${place.rating.toFixed(1)}</p>
        <p>Reviews: ${place.reviewsCount}</p>
        <p>Review: "${place.review}"</p>
      `;
      output.appendChild(placeDiv);
    });
  });
  