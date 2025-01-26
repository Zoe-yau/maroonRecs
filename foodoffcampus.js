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
  { name: "RX Pizza", cuisine: "Pizza", rating: 4.8, reviewsCount: 1345, review: "Arguably the best pizza in town. The pesto chicken pizza is highly recommended." },
  { name: "Shipwreck Grill", cuisine: "Seafood", rating: 4.5, reviewsCount: 980, review: "Fresh seafood with a laid-back atmosphere. Try the blackened shrimp tacos!" },
  { name: "Stella Southern Cafe", cuisine: "Southern", rating: 4.8, reviewsCount: 782, review: "A modern twist on Southern classics. The chicken and waffles are divine." },
  { name: "Howdy's Texas Grill'd Pizza", cuisine: "Pizza", rating: 4.7, reviewsCount: 490, review: "Texas-style pizzas that are packed with flavor. The BBQ brisket pizza is a must-try!" },
  { name: "Cafe Eccell", cuisine: "American", rating: 4.5, reviewsCount: 1050, review: "Known for their strawberry tart and an upscale twist on American classics." },
  { name: "Urban Table", cuisine: "American", rating: 4.6, reviewsCount: 870, review: "A great spot for casual dining with flavorful dishes like their grilled salmon." },
  { name: "The Republic Steakhouse", cuisine: "Steakhouse", rating: 4.7, reviewsCount: 1250, review: "An upscale steakhouse offering perfectly cooked steaks and an extensive wine list." },
  { name: "Luigi's Patio Ristorante", cuisine: "Italian", rating: 4.6, reviewsCount: 845, review: "Romantic ambiance with authentic Italian dishes and live music on weekends." },
  { name: "Texas Roadhouse", cuisine: "Steakhouse", rating: 4.4, reviewsCount: 2150, review: "Classic steakhouse with hearty portions and legendary bread rolls." },
  { name: "World of Beer", cuisine: "Bar & Grill", rating: 4.5, reviewsCount: 730, review: "A wide selection of craft beers paired with delicious bar food." },
  { name: "J. Cody's Steak and Barbeque", cuisine: "Barbecue", rating: 4.6, reviewsCount: 960, review: "Family-style barbecue joint with generous portions of brisket and ribs." },
  { name: "Coco Loco Mexican Grill", cuisine: "Mexican", rating: 4.4, reviewsCount: 830, review: "Known for their delicious fajitas and margaritas. A College Station classic!" },
  { name: "Black Bear Diner", cuisine: "Diner", rating: 4.3, reviewsCount: 710, review: "Hearty diner meals with large portions. Perfect for breakfast and comfort food." },
  { name: "Harvest Coffee", cuisine: "Cafe", rating: 4.8, reviewsCount: 680, review: "A cozy cafe with artisanal coffee and fresh pastries. A local favorite!" },
  { name: "Kolache Rolf's", cuisine: "Bakery", rating: 4.7, reviewsCount: 890, review: "Delicious kolaches and breakfast options. Try their sausage and cheese kolache!" },
  { name: "Torchy's Tacos", cuisine: "Mexican", rating: 4.6, reviewsCount: 2100, review: "Creative tacos with bold flavors. Don't miss the Trailer Park taco!" },
  { name: "Star Cinema Grill", cuisine: "American", rating: 4.5, reviewsCount: 650, review: "Dinner and a movie experience with a full menu and cozy seating." },
  { name: "Freddy's Frozen Custard & Steakburgers", cuisine: "Fast Food", rating: 4.4, reviewsCount: 1150, review: "Fast service and quality steakburgers. Their frozen custard is a treat!" },
  { name: "Chicken Express", cuisine: "Fast Food", rating: 4.3, reviewsCount: 920, review: "Crispy fried chicken and sweet tea make this a quick and delicious stop." }
];


// Function to display food places
function displayPlaces(places) {
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous content

  // Sort places by rating and then by reviews
  const sortedPlaces = places.sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating; // Sort by rating
    }
    return b.reviewsCount - a.reviewsCount; // Tiebreaker: number of reviews
  });

  // Render sorted places
  sortedPlaces.forEach((place, index) => {
    const placeDiv = document.createElement("div");
    placeDiv.className = "info-box";
    placeDiv.innerHTML = `
      <h3>${index + 1}. ${place.name}</h3>
      <p><strong>Cuisine:</strong> ${place.cuisine}</p>
      <p><strong>Rating:</strong> ${place.rating.toFixed(1)}</p>
      <p><strong>Reviews:</strong> ${place.reviewsCount}</p>
      <p><strong>Review:</strong> "${place.review}"</p>
    `;
    output.appendChild(placeDiv);
  });
}

// Display all places by default on page load
document.addEventListener("DOMContentLoaded", () => {
  displayPlaces(foodPlaces); // Display all food places initially
});

// Event listener for dropdown selection
document.getElementById("searchButton").addEventListener("click", () => {
  const selectedCuisine = document.getElementById("cuisineDropdown").value.trim();

  // If no cuisine is selected, show all places
  if (!selectedCuisine) {
    displayPlaces(foodPlaces);
    return;
  }

  // Filter by selected cuisine (case-insensitive)
  const filteredPlaces = foodPlaces.filter(
    place => place.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
  );

  // Display filtered results
  displayPlaces(filteredPlaces);
});
