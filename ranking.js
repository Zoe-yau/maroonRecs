const output = document.querySelector("#output");

const data = [
  { section: "CYBR-201-500", A: 72, B: 4, C: 0, D: 0, F: 0, GPA: 3.947, Q: 2, Instructor: "ROMERO J" },
  { section: "CYBR-402-500", A: 5, B: 2, C: 0, D: 0, F: 0, GPA: 3.714, Q: 0, Instructor: "DEWITTE P" },
  { section: "CYBR-403-501", A: 5, B: 4, C: 1, D: 0, F: 0, GPA: 3.4, Q: 2, Instructor: "ANWAR S" },
  { section: "CYBR-405-500", A: 45, B: 0, C: 1, D: 0, F: 0, GPA: 3.956, Q: 1, Instructor: "PRICE P" },
  { section: "CYBR-601-600", A: 14, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "ROMERO J" },
  { section: "CYBR-602-601", A: 12, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "DEWITTE P" },
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
        <p id="rank">Rank: ${index + 1}</p>
        <p id="instructor">Instructor: ${professor.Instructor}</p>
        <p id="class">Class: ${professor.section}</p>
        <p id="gpa">GPA: ${professor.GPA.toFixed(2)}</p>
        <p id="drops">Q-Drops: ${professor.Q}</p>
    `;

  // Append the child div to the parent div
  output.appendChild(infoDiv);
});
