const foodPlaces = 
  [
    { name: "Layne's Chicken Fingers", cuisine: "Fast Food", rating: 4.6, reviewsCount: 2154, review: "Amazing chicken fingers and the secret sauce is to die for. A must-visit for Aggies!", hours: { Monday: "10 AM - 10 PM", Tuesday: "10 AM - 10 PM", Wednesday: "10 AM - 10 PM", Thursday: "10 AM - 11 PM", Friday: "10 AM - 11 PM", Saturday: "10 AM - 11 PM", Sunday: "10 AM - 10 PM" } },
    { name: "Fuego Tortilla Grill", cuisine: "Mexican", rating: 4.7, reviewsCount: 3951, review: "Best tacos in town, open 24/7. The Dr Pepper Cowboy taco is a favorite.", hours: { Monday: "Open 24 hours", Tuesday: "Open 24 hours", Wednesday: "Open 24 hours", Thursday: "Open 24 hours", Friday: "Open 24 hours", Saturday: "Open 24 hours", Sunday: "Open 24 hours" } },
    { name: "Dixie Chicken", cuisine: "Bar & Grill", rating: 4.5, reviewsCount: 1523, review: "Great place to hang out, drink beer, and enjoy some southern-style food.", hours: { Monday: "11 AM - 12 AM", Tuesday: "11 AM - 12 AM", Wednesday: "11 AM - 12 AM", Thursday: "11 AM - 2 AM", Friday: "11 AM - 2 AM", Saturday: "11 AM - 2 AM", Sunday: "11 AM - 12 AM" } },
    { name: "Mad Taco", cuisine: "Mexican Fusion", rating: 4.4, reviewsCount: 845, review: "Delicious tacos with a modern twist. Try the brisket taco with their spicy salsa.", hours: { Monday: "11 AM - 10 PM", Tuesday: "11 AM - 10 PM", Wednesday: "11 AM - 10 PM", Thursday: "11 AM - 11 PM", Friday: "11 AM - 11 PM", Saturday: "11 AM - 11 PM", Sunday: "11 AM - 9 PM" } },
    { name: "Blue Baker", cuisine: "Bakery & Cafe", rating: 4.7, reviewsCount: 1023, review: "Freshly baked bread and amazing sandwiches. The jalapeño cheddar bread is a winner.", hours: { Monday: "6 AM - 9 PM", Tuesday: "6 AM - 9 PM", Wednesday: "6 AM - 9 PM", Thursday: "6 AM - 9 PM", Friday: "6 AM - 10 PM", Saturday: "6 AM - 10 PM", Sunday: "7 AM - 9 PM" } },
    { name: "Razzoo's Cajun Cafe", cuisine: "Cajun", rating: 4.4, reviewsCount: 643, review: "Great Cajun food with bold flavors. The crawfish étouffée is excellent.", hours: { Monday: "11 AM - 10 PM", Tuesday: "11 AM - 10 PM", Wednesday: "11 AM - 10 PM", Thursday: "11 AM - 11 PM", Friday: "11 AM - 11 PM", Saturday: "11 AM - 11 PM", Sunday: "11 AM - 10 PM" } },
    { name: "Grub Burger Bar", cuisine: "Burgers", rating: 4.5, reviewsCount: 1953, review: "Creative burger options with great sides. The Scorpion Burger is a spicy treat!", hours: { Monday: "11 AM - 10 PM", Tuesday: "11 AM - 10 PM", Wednesday: "11 AM - 10 PM", Thursday: "11 AM - 11 PM", Friday: "11 AM - 12 AM", Saturday: "11 AM - 12 AM", Sunday: "11 AM - 9 PM" } },
    { name: "Blackwater Draw Brewing Co.", cuisine: "Brewery & American", rating: 4.6, reviewsCount: 542, review: "Good craft beers and solid pub food. The pulled pork sandwich is a must-try.", hours: { Monday: "Closed", Tuesday: "4 PM - 10 PM", Wednesday: "4 PM - 10 PM", Thursday: "4 PM - 11 PM", Friday: "12 PM - 11 PM", Saturday: "12 PM - 11 PM", Sunday: "12 PM - 9 PM" } },
    { name: "Napa Flats Wood-Fired Kitchen", cuisine: "Italian", rating: 4.6, reviewsCount: 973, review: "Fresh wood-fired pizzas and pastas. The gelato here is the perfect dessert.", hours: { Monday: "11 AM - 10 PM", Tuesday: "11 AM - 10 PM", Wednesday: "11 AM - 10 PM", Thursday: "11 AM - 10 PM", Friday: "11 AM - 11 PM", Saturday: "11 AM - 11 PM", Sunday: "11 AM - 9 PM" } },
    { name: "Sweet Paris Crêperie & Café", cuisine: "French", rating: 4.5, reviewsCount: 789, review: "Lovely place for sweet and savory crepes. The Nutella crepe is heavenly.", hours: { Monday: "9 AM - 9 PM", Tuesday: "9 AM - 9 PM", Wednesday: "9 AM - 9 PM", Thursday: "9 AM - 10 PM", Friday: "9 AM - 10 PM", Saturday: "9 AM - 10 PM", Sunday: "9 AM - 8 PM" } },
  { name: "All the King's Men", cuisine: "Barbecue", rating: 4.7, reviewsCount: 854, review: "Amazing BBQ with great beer options. The brisket is melt-in-your-mouth good.", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 10 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "11 AM - 9 PM" } },
  { name: "Taz Indian Cuisine", cuisine: "Indian", rating: 4.4, reviewsCount: 328, review: "Authentic Indian food with a great selection. The butter chicken is fantastic.", hours: { Monday: "11 AM - 2:30 PM, 5 PM - 9 PM", Tuesday: "11 AM - 2:30 PM, 5 PM - 9 PM", Wednesday: "11 AM - 2:30 PM, 5 PM - 9 PM", Thursday: "11 AM - 2:30 PM, 5 PM - 9 PM", Friday: "11 AM - 2:30 PM, 5 PM - 9:30 PM", Saturday: "12 PM - 9:30 PM", Sunday: "12 PM - 9 PM" } },
  { name: "Ohana Korean Grill", cuisine: "Korean", rating: 4.6, reviewsCount: 489, review: "Delicious Korean BBQ with fresh ingredients. The bulgogi is a standout dish.", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 9 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "12 PM - 9 PM" } },
  { name: "First Watch", cuisine: "Breakfast & Brunch", rating: 4.7, reviewsCount: 1123, review: "Healthy and hearty breakfast options. The avocado toast is a customer favorite.", hours: { Monday: "7 AM - 2:30 PM", Tuesday: "7 AM - 2:30 PM", Wednesday: "7 AM - 2:30 PM", Thursday: "7 AM - 2:30 PM", Friday: "7 AM - 2:30 PM", Saturday: "7 AM - 2:30 PM", Sunday: "7 AM - 2:30 PM" } },
  { name: "RX Pizza", cuisine: "Pizza", rating: 4.8, reviewsCount: 1345, review: "Arguably the best pizza in town. The pesto chicken pizza is highly recommended.", hours: { Monday: "11 AM - 10 PM", Tuesday: "11 AM - 10 PM", Wednesday: "11 AM - 10 PM", Thursday: "11 AM - 10 PM", Friday: "11 AM - 11 PM", Saturday: "11 AM - 11 PM", Sunday: "11 AM - 9 PM" } },
  { name: "Shipwreck Grill", cuisine: "Seafood", rating: 4.5, reviewsCount: 980, review: "Fresh seafood with a laid-back atmosphere. Try the blackened shrimp tacos!", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 9 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "11 AM - 9 PM" } },
  { name: "Stella Southern Cafe", cuisine: "Southern", rating: 4.8, reviewsCount: 782, review: "A modern twist on Southern classics. The chicken and waffles are divine.", hours: { Monday: "7 AM - 2 PM", Tuesday: "7 AM - 2 PM", Wednesday: "7 AM - 2 PM", Thursday: "7 AM - 2 PM", Friday: "7 AM - 2 PM", Saturday: "7 AM - 2 PM", Sunday: "7 AM - 2 PM" } },
  { name: "Howdy's Texas Grill'd Pizza", cuisine: "Pizza", rating: 4.7, reviewsCount: 490, review: "Texas-style pizzas that are packed with flavor. The BBQ brisket pizza is a must-try!", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 9 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "12 PM - 9 PM" } },
  { name: "Cafe Eccell", cuisine: "American", rating: 4.5, reviewsCount: 1050, review: "Known for their strawberry tart and an upscale twist on American classics.", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 10 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "11 AM - 9 PM" } },
  { name: "Urban Table", cuisine: "American", rating: 4.6, reviewsCount: 870, review: "A great spot for casual dining with flavorful dishes like their grilled salmon.", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 9 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "11 AM - 9 PM" } },
  { name: "The Republic Steakhouse", cuisine: "Steakhouse", rating: 4.7, reviewsCount: 1250, review: "An upscale steakhouse offering perfectly cooked steaks and an extensive wine list.", hours: { Monday: "5 PM - 10 PM", Tuesday: "5 PM - 10 PM", Wednesday: "5 PM - 10 PM", Thursday: "5 PM - 10 PM", Friday: "5 PM - 11 PM", Saturday: "5 PM - 11 PM", Sunday: "5 PM - 9 PM" } },
  { name: "Luigi's Patio Ristorante", cuisine: "Italian", rating: 4.6, reviewsCount: 845, review: "Romantic ambiance with authentic Italian dishes and live music on weekends.", hours: { Monday: "4 PM - 9 PM", Tuesday: "4 PM - 9 PM", Wednesday: "4 PM - 9 PM", Thursday: "4 PM - 9 PM", Friday: "4 PM - 10 PM", Saturday: "4 PM - 10 PM", Sunday: "4 PM - 9 PM" } },
  { name: "Texas Roadhouse", cuisine: "Steakhouse", rating: 4.4, reviewsCount: 2150, review: "Classic steakhouse with hearty portions and legendary bread rolls.", hours: { Monday: "4 PM - 10 PM", Tuesday: "4 PM - 10 PM", Wednesday: "4 PM - 10 PM", Thursday: "4 PM - 10 PM", Friday: "4 PM - 11 PM", Saturday: "11 AM - 11 PM", Sunday: "11 AM - 10 PM" } },
  { name: "World of Beer", cuisine: "Bar & Grill", rating: 4.5, reviewsCount: 730, review: "A wide selection of craft beers paired with delicious bar food.", hours: { Monday: "11 AM - 12 AM", Tuesday: "11 AM - 12 AM", Wednesday: "11 AM - 12 AM", Thursday: "11 AM - 1 AM", Friday: "11 AM - 1 AM", Saturday: "11 AM - 1 AM", Sunday: "11 AM - 12 AM" } },
  { name: "J. Cody's Steak and Barbeque", cuisine: "Barbecue", rating: 4.6, reviewsCount: 960, review: "Family-style barbecue joint with generous portions of brisket and ribs.", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 9 PM", Friday: "11 AM - 9 PM", Saturday: "11 AM - 9 PM", Sunday: "11 AM - 8 PM" } },
  { name: "Coco Loco Mexican Grill", cuisine: "Mexican", rating: 4.4, reviewsCount: 830, review: "Known for their delicious fajitas and margaritas. A College Station classic!", hours: { Monday: "11 AM - 9 PM", Tuesday: "11 AM - 9 PM", Wednesday: "11 AM - 9 PM", Thursday: "11 AM - 10 PM", Friday: "11 AM - 10 PM", Saturday: "11 AM - 10 PM", Sunday: "11 AM - 9 PM" } },
  { name: "Black Bear Diner", cuisine: "Diner", rating: 4.3, reviewsCount: 710, review: "Hearty diner meals with large portions. Perfect for breakfast and comfort food.", hours: { Monday: "6 AM - 10 PM", Tuesday: "6 AM - 10 PM", Wednesday: "6 AM - 10 PM", Thursday: "6 AM - 10 PM", Friday: "6 AM - 11 PM", Saturday: "6 AM - 11 PM", Sunday: "6 AM - 10 PM" } },
  { name: "Harvest Coffee", cuisine: "Cafe", rating: 4.8, reviewsCount: 680, review: "A cozy cafe with artisanal coffee and fresh pastries. A local favorite!", hours: { Monday: "7 AM - 7 PM", Tuesday: "7 AM - 7 PM", Wednesday: "7 AM - 7 PM", Thursday: "7 AM - 7 PM", Friday: "7 AM - 9 PM", Saturday: "8 AM - 9 PM", Sunday: "8 AM - 7 PM" } },
  { name: "Kolache Rolf's", cuisine: "Bakery", rating: 4.7, reviewsCount: 890, review: "Delicious kolaches and breakfast options. Try their sausage and cheese kolache!", hours: { Monday: "6 AM - 2 PM", Tuesday: "6 AM - 2 PM", Wednesday: "6 AM - 2 PM", Thursday: "6 AM - 2 PM", Friday: "6 AM - 2 PM", Saturday: "6 AM - 2 PM", Sunday: "Closed" } },
  { name: "Torchy's Tacos", cuisine: "Mexican", rating: 4.6, reviewsCount: 2100, review: "Creative tacos with bold flavors. Don't miss the Trailer Park taco!", hours: { Monday: "10 AM - 10 PM", Tuesday: "10 AM - 10 PM", Wednesday: "10 AM - 10 PM", Thursday: "10 AM - 11 PM", Friday: "10 AM - 11 PM", Saturday: "10 AM - 11 PM", Sunday: "10 AM - 10 PM" } },
  { name: "Star Cinema Grill", cuisine: "American", rating: 4.5, reviewsCount: 650, review: "Dinner and a movie experience with a full menu and cozy seating.", hours: { Monday: "11 AM - 10 PM", Tuesday: "11 AM - 10 PM", Wednesday: "11 AM - 10 PM", Thursday: "11 AM - 10 PM", Friday: "11 AM - 11 PM", Saturday: "11 AM - 11 PM", Sunday: "11 AM - 10 PM" } },
  { name: "Freddy's Frozen Custard & Steakburgers", cuisine: "Fast Food", rating: 4.4, reviewsCount: 1150, review: "Fast service and quality steakburgers. Their frozen custard is a treat!", hours: { Monday: "10 AM - 10 PM", Tuesday: "10 AM - 10 PM", Wednesday: "10 AM - 10 PM", Thursday: "10 AM - 11 PM", Friday: "10 AM - 11 PM", Saturday: "10 AM - 11 PM", Sunday: "10 AM - 10 PM" } },
  { name: "Chicken Express", cuisine: "Fast Food", rating: 4.3, reviewsCount: 920, review: "Crispy fried chicken and sweet tea make this a quick and delicious stop.", hours: { Monday: "10 AM - 9 PM", Tuesday: "10 AM - 9 PM", Wednesday: "10 AM - 9 PM", Thursday: "10 AM - 9 PM", Friday: "10 AM - 10 PM", Saturday: "10 AM - 10 PM", Sunday: "10 AM - 9 PM" } }
  ];

  
  function displayPlaces(places) {
    const output = document.getElementById("output");
    output.innerHTML = "";
  
    const currentTime = new Date();
    const currentDay = currentTime.toLocaleDateString("en-US", { weekday: "long" });
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    // Sort places to prioritize open places first, then by rating and reviews
    const sortedPlaces = places.sort((a, b) => {
      const aIsOpen = checkIfOpen(a.hours[currentDay], currentHour, currentMinute);
      const bIsOpen = checkIfOpen(b.hours[currentDay], currentHour, currentMinute);
  
      if (aIsOpen !== bIsOpen) {
        return bIsOpen - aIsOpen; // Prioritize open places
      }
  
      if (b.rating !== a.rating) {
        return b.rating - a.rating; // Sort by rating
      }
  
      return b.reviewsCount - a.reviewsCount; // Sort by reviews count
    });
  
    sortedPlaces.forEach((place, index) => {
      const placeDiv = document.createElement("div");
      placeDiv.className = "info-box";
  
      const hours = place.hours[currentDay];
      const isOpen = checkIfOpen(hours, currentHour, currentMinute);
  
      placeDiv.innerHTML = `
        <h3 id="name">${index + 1}. ${place.name}</h3>
        <p><strong>Status:</strong> <span style="color: ${isOpen ? "green" : "red"};">${isOpen ? "Open" : "Closed"}</span></p>
        <p><strong>Cuisine:</strong> ${place.cuisine}</p>
        <p><strong>Rating:</strong> ${place.rating.toFixed(1)}</p>
        <p><strong>Reviews:</strong> ${place.reviewsCount}</p>
        <p><strong>Review:</strong> "${place.review}"</p>
      `;
      output.appendChild(placeDiv);
    });
  }
  
  function checkIfOpen(hours, currentHour, currentMinute) {
    if (!hours || hours.toLowerCase() === "closed") return false;
    if (hours.toLowerCase() === "open 24 hours") return true;
  
    const [opening, closing] = hours.split(" - ").map(time => convertTo24Hour(time));
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
  
    return currentTimeInMinutes >= opening && currentTimeInMinutes < closing;
  }
  
  function convertTo24Hour(time) {
    const [timePart, period] = time.split(" ");
    let [hour, minute] = timePart.split(":").map(Number);
  
    if (!minute) minute = 0;
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
  
    return hour * 60 + minute; // Return time in minutes since midnight
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayPlaces(foodPlaces);
  });
  
  document.getElementById("searchButton").addEventListener("click", () => {
    const selectedCuisine = document.getElementById("cuisineDropdown").value.trim();
    const selectedStatus = document.getElementById("statusDropdown").value.trim(); // Get the status filter value
  
    let filteredPlaces = [...foodPlaces];
  
    // Filter by cuisine if not "All" or empty
    if (selectedCuisine) {
      filteredPlaces = filteredPlaces.filter(
        place => place.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
      );
    }
  
    // Filter by status if "Open" or "Closed" is selected
    if (selectedStatus === "Open" || selectedStatus === "Closed") {
      const currentTime = new Date();
      const currentDay = currentTime.toLocaleDateString("en-US", { weekday: "long" });
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
  
      filteredPlaces = filteredPlaces.filter(place => {
        const hours = place.hours[currentDay];
        const isOpen = checkIfOpen(hours, currentHour, currentMinute);
        return selectedStatus === "Open" ? isOpen : !isOpen;
      });
    }
  
    // Display the filtered results or a no-results message
    if (filteredPlaces.length === 0) {
      const output = document.getElementById("output");
      output.innerHTML = `<p style="color: #420303; text-align: center; font-weight: bold;">No results found. Please adjust your filters.</p>`;
      return;
    }
  
    displayPlaces(filteredPlaces);
  });