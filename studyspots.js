const studySpots = [
    // Libraries
{
    name: "Evans Library",
    location: "Central Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Weekday evenings (6 PM - 10 PM)",
    emptiestTimes: "Early mornings (5 AM - 8 AM)",
},
{
    name: "Business Library & Collaboration Commons (BLCC)",
    location: "West Campus",
    weekdayHours: "7 AM - 12 AM",
    weekendHours: "12 PM - 12 AM",
    busiestTimes: "Weekday afternoons (3 PM - 7 PM)",
    emptiestTimes: "Early mornings (7 AM - 9 AM)",
},
{
    name: "Policy Sciences & Economics Library (PSEL)",
    location: "West Campus",
    weekdayHours: "7:30 AM - 10 PM",
    weekendHours: "Closed",
    busiestTimes: "Mid-afternoons (2 PM - 5 PM)",
    emptiestTimes: "Early mornings (7:30 AM - 9 AM)",
},
{
    name: "Medical Sciences Library (MSL)",
    location: "West Campus",
    weekdayHours: "8 AM - 10 PM",
    weekendHours: "Closed",
    busiestTimes: "Afternoons (1 PM - 4 PM)",
    emptiestTimes: "Mornings (8 AM - 10 AM)",
},

// Study Lounges and Areas
{
    name: "MSC Flag Room",
    location: "Central Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Evenings (6 PM - 11 PM)",
    emptiestTimes: "Early mornings (5 AM - 8 AM)",
},
{
    name: "Aggie Honor Lounge - MSC",
    location: "Central Campus",
    weekdayHours: "8 AM - 10 PM",
    weekendHours: "Closed",
    busiestTimes: "Afternoons (12 PM - 4 PM)",
    emptiestTimes: "Mornings (8 AM - 10 AM)",
},
{
    name: "Commons Lobby",
    location: "South Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Evenings (5 PM - 10 PM)",
    emptiestTimes: "Late nights (2 AM - 5 AM)",
},
{
    name: "Rec Center Quiet Study Areas",
    location: "South Campus",
    weekdayHours: "6 AM - 12 AM",
    weekendHours: "8 AM - 12 AM",
    busiestTimes: "Afternoons (3 PM - 8 PM)",
    emptiestTimes: "Early mornings (6 AM - 9 AM)",
},

// Academic Buildings
{
    name: "Engineering Activity Building A (EABA)",
    location: "North Campus",
    weekdayHours: "7 AM - 11 PM",
    weekendHours: "Closed",
    busiestTimes: "Late afternoons (4 PM - 8 PM)",
    emptiestTimes: "Early mornings (7 AM - 9 AM)",
},
{
    name: "Harrington Tower Lobby",
    location: "Central Campus",
    weekdayHours: "8 AM - 9 PM",
    weekendHours: "Closed",
    busiestTimes: "Midday (11 AM - 3 PM)",
    emptiestTimes: "Morning (8 AM - 10 AM)",
},
{
    name: "Langford Architecture Building",
    location: "Central Campus",
    weekdayHours: "8 AM - 10 PM",
    weekendHours: "Closed",
    busiestTimes: "Afternoons (1 PM - 5 PM)",
    emptiestTimes: "Morning (8 AM - 10 AM)",
},

// Coffee Shops with Study Spaces
{
    name: "Starbucks at Evans Library",
    location: "Central Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Evenings (6 PM - 11 PM)",
    emptiestTimes: "Early mornings (5 AM - 8 AM)",
},
{
    name: "Sweet Eugene’s House of Java",
    location: "Off Campus",
    weekdayHours: "7 AM - 12 AM",
    weekendHours: "8 AM - 12 AM",
    busiestTimes: "Afternoons (1 PM - 5 PM)",
    emptiestTimes: "Early mornings (7 AM - 9 AM)",
},
{
    name: "What’s the Buzz Coffee - MSC",
    location: "Central Campus",
    weekdayHours: "7 AM - 7 PM",
    weekendHours: "Closed",
    busiestTimes: "Midday (11 AM - 3 PM)",
    emptiestTimes: "Morning (7 AM - 9 AM)",
},

// Outdoor Spaces
{
    name: "Rudder Fountain Area",
    location: "Central Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Afternoons (12 PM - 5 PM)",
    emptiestTimes: "Early mornings (5 AM - 8 AM)",
},
{
    name: "Aggie Park Pavilion",
    location: "Central Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Afternoons (1 PM - 6 PM)",
    emptiestTimes: "Early mornings (5 AM - 8 AM)",
},
{
    name: "The Gardens at TAMU (Leach Teaching Gardens)",
    location: "West Campus",
    weekdayHours: "24/7",
    weekendHours: "24/7",
    busiestTimes: "Midday to early afternoon (11 AM - 3 PM)",
    emptiestTimes: "Late nights (10 PM - 5 AM)",
},]

function isOpenNow(hours) {
    const now = new Date();
    const currentHour = now.getHours();

    if (hours === "24/7") {
        return true;
    }

    const [weekdayStart, weekdayEnd] = hours.split(" - ").map((time) => {
        const [hour, meridian] = time.split(/\s|:/);
        let hour24 = parseInt(hour, 10);
        if (meridian === "PM" && hour24 !== 12) hour24 += 12;
        if (meridian === "AM" && hour24 === 12) hour24 = 0;
        return hour24;
    });

    return currentHour >= weekdayStart && currentHour < weekdayEnd;
}

function getCurrentTimePeriod() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 8) return "Early mornings (5 AM - 8 AM)";
    if (hours >= 8 && hours < 12) return "Morning (8 AM - 12 PM)";
    if (hours >= 12 && hours < 5) return "Afternoons (12 PM - 5 PM)";
    if (hours >= 5 && hours < 10) return "Evenings (5 PM - 10 PM)";
    return "Late nights (10 PM - 5 AM)";
}

function rankPlacesByEmptiness(places) {
    const currentTimePeriod = getCurrentTimePeriod();
    return places
        .map((place) => {
            const isOpen = isOpenNow(place.weekdayHours);
            const rank = isOpen
                ? place.emptiestTimes === currentTimePeriod ? 1 : 2
                : 3; // Closed places are ranked last
            return { ...place, rank, isOpen };
        })
        .sort((a, b) => a.rank - b.rank);
}

function displayPlaces(places) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    places.forEach((place, index) => {
        const openStatus = isOpenNow(place.weekdayHours);
        const placeDiv = document.createElement("div");
        placeDiv.className = "info-box";
        placeDiv.innerHTML = `
            <h3>${place.name}</h3>
            <p><strong>Location:</strong> ${place.location}</p>
            <p><strong>Status:</strong> <span class="${openStatus ? "open" : "closed"}">${openStatus ? "Open" : "Closed"}</span></p>
            <div style="position: absolute; bottom: 10px; right: 10px; font-size: 18px; font-weight: bold;">${index + 1}</div>
        `;
        placeDiv.style.position = "relative";
        output.appendChild(placeDiv);
    });
}

function filterAndRankPlaces() {
    const locationDropdown = document.getElementById("locationDropdown");
    const statusDropdown = document.getElementById("statusDropdown");

    const selectedLocation = locationDropdown.value;
    const selectedStatus = statusDropdown.value;

    const filteredPlaces = studySpots.filter((place) => {
        const matchesLocation = selectedLocation === "All" || place.location === selectedLocation;
        const matchesStatus =
            selectedStatus === "All" ||
            (selectedStatus === "Open" && isOpenNow(place.weekdayHours)) ||
            (selectedStatus === "Closed" && !isOpenNow(place.weekdayHours));

        return matchesLocation && matchesStatus;
    });

    const rankedPlaces = rankPlacesByEmptiness(filteredPlaces);
    displayPlaces(rankedPlaces);
}

document.getElementById("filterButton").addEventListener("click", filterAndRankPlaces);

// Initial display
filterAndRankPlaces();