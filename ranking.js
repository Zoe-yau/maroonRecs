const output = document.querySelector("#output");

const data = [
  { section: "CYBR-201-500", A: 72, B: 4, C: 0, D: 0, F: 0, GPA: 3.947, Q: 2, Instructor: "ROMERO J" },
  { section: "CYBR-402-500", A: 5, B: 2, C: 0, D: 0, F: 0, GPA: 3.714, Q: 0, Instructor: "DEWITTE P" },
  { section: "CYBR-403-501", A: 5, B: 4, C: 1, D: 0, F: 0, GPA: 3.4, Q: 2, Instructor: "ANWAR S" },
  { section: "CYBR-405-500", A: 45, B: 0, C: 1, D: 0, F: 0, GPA: 3.956, Q: 1, Instructor: "PRICE P" },
  { section: "CYBR-601-600", A: 14, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "ROMERO J" },
  { section: "CYBR-602-601", A: 12, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "DEWITTE P" },
  { section: "AERO-201-200", A: 11, B: 5, C: 2, D: 0, F: 0, GPA: 3.5, Q: 0, Instructor: "BHARGAVA D" },
  { section: "AERO-201-501", A: 14, B: 13, C: 7, D: 0, F: 2, GPA: 3.027, Q: 0, Instructor: "BHARGAVA D" },
  { section: "AERO-201-502", A: 6, B: 28, C: 7, D: 0, F: 0, GPA: 2.975, Q: 0, Instructor: "SIDDIQUI F" },
  { section: "AERO-202-503", A: 10, B: 5, C: 3, D: 1, F: 0, GPA: 3.2, Q: 0, Instructor: "SIDDIQUI F" },
  { section: "AERO-202-504", A: 20, B: 10, C: 5, D: 0, F: 0, GPA: 3.6, Q: 1, Instructor: "MOBLE B" },
  { section: "AERO-203-505", A: 18, B: 12, C: 4, D: 0, F: 0, GPA: 3.8, Q: 1, Instructor: "MOBLE B" },
  { section: "AERO-204-506", A: 22, B: 8, C: 6, D: 0, F: 0, GPA: 3.7, Q: 0, Instructor: "SANJUAN MUNOZ J" },
  { section: "AERO-205-507", A: 12, B: 5, C: 2, D: 0, F: 0, GPA: 3.1, Q: 0, Instructor: "DOGARIU A" },
  { section: "AERO-206-508", A: 15, B: 10, C: 3, D: 0, F: 0, GPA: 3.4, Q: 0, Instructor: "DOGARIU A" },
  { section: "AERO-207-509", A: 8, B: 9, C: 4, D: 1, F: 0, GPA: 2.9, Q: 0, Instructor: "SINGH N" },
  { section: "AERO-303-501", A: 32, B: 33, C: 13, D: 0, F: 0, GPA: 3.243, Q: 0, Instructor: "GUHATHAKURTA S" },
  { section: "AERO-304-200", A: 2, B: 14, C: 4, D: 0, F: 0, GPA: 2.9, Q: 0, Instructor: "BENZERGA A" },
  { section: "AERO-304-500", A: 14, B: 34, C: 20, D: 2, F: 0, GPA: 2.857, Q: 0, Instructor: "BENZERGA A" },
  { section: "AERO-304-501", A: 32, B: 25, C: 7, D: 0, F: 2, GPA: 3.287, Q: 5, Instructor: "LE GRAVEREND J" },
  { section: "AERO-306-500", A: 77, B: 1, C: 1, D: 1, F: 2, GPA: 3.829, Q: 1, Instructor: "STROUBOULIS T" },
  { section: "AERO-307-900", A: 24, B: 1, C: 0, D: 0, F: 0, GPA: 3.96, Q: 0, Instructor: "LE GRAVEREND J" },
  { section: "AERO-307-901", A: 15, B: 3, C: 3, D: 1, F: 0, GPA: 3.454, Q: 0, Instructor: "LE GRAVEREND J" },
  { section: "AERO-307-904", A: 18, B: 6, C: 1, D: 0, F: 0, GPA: 3.68, Q: 0, Instructor: "LE GRAVEREND J" },
  { section: "AERO-307-906", A: 11, B: 9, C: 2, D: 0, F: 0, GPA: 3.409, Q: 0, Instructor: "LE GRAVEREND J" },
];

// Sorting logic
const rankedData = data.sort((a, b) => {
  if (b.GPA !== a.GPA) {
    return b.GPA - a.GPA; // Rank by GPA first
  }
  if (a.Q !== b.Q) {
    return a.Q - b.Q; // Rank by fewer Q-Drops second
  }
  // Rank by grades (more A's, fewer B-F's)
  const aGradeTotal = a.A * 4 + a.B * 3 + a.C * 2 + a.D * 1 + a.F * 0;
  const bGradeTotal = b.A * 4 + b.B * 3 + b.C * 2 + b.D * 1 + b.F * 0;
  return bGradeTotal - aGradeTotal;
});

// Display the ranked data in the HTML
rankedData.forEach((professor, index) => {
  // Create a new child div for each professor
  const infoDiv = document.createElement("div");
  infoDiv.className = "professor-info"; // Optional: Add a class for styling

  // Add the professor's details as inner HTML
  infoDiv.innerHTML = `
        <p id="rank">${index + 1}</p>
        <p id="instructor">Instructor: ${professor.Instructor}</p>
        <p id="class">Class: ${professor.section}</p>
        <p id="gpa">GPA: ${professor.GPA.toFixed(2)}</p>
        <p id="drops">Q-Drops: ${professor.Q}</p>
    `;

  // Append the child div to the parent div
  output.appendChild(infoDiv);
});
