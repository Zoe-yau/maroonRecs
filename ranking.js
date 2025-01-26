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
  { section: "BMEN-201-901", A: 25, B: 19, C: 2, D: 0, F: 0, GPA: 3.425, Q: 0, Instructor: "HORN J" },
  { section: "BMEN-201-902", A: 24, B: 31, C: 3, D: 0, F: 1, GPA: 3.305, Q: 0, Instructor: "HORN J" },
  { section: "BMEN-201-903", A: 16, B: 15, C: 5, D: 0, F: 1, GPA: 3.21, Q: 0, Instructor: "HORN J" },
  { section: "BMEN-250-200", A: 6, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "HOYT K" },
  { section: "BMEN-250-500", A: 9, B: 2, C: 1, D: 0, F: 0, GPA: 3.666, Q: 0, Instructor: "HOYT K" },
  { section: "BMEN-253-502", A: 58, B: 6, C: 0, D: 0, F: 0, GPA: 3.906, Q: 0, Instructor: "BUJNOCH Z" },
  { section: "BMEN-253-503", A: 43, B: 6, C: 0, D: 0, F: 0, GPA: 3.877, Q: 0, Instructor: "BUJNOCH Z" },
  { section: "BMEN-253-504", A: 41, B: 2, C: 0, D: 0, F: 0, GPA: 3.953, Q: 0, Instructor: "BUJNOCH Z" },
  { section: "BMEN-311-500", A: 15, B: 12, C: 1, D: 0, F: 2, GPA: 3.266, Q: 0, Instructor: "YAKOVLEV V" },
  { section: "BIOT-635-600", A: 17, B: 12, C: 0, D: 0, F: 0, GPA: 3.586, Q: 1, Instructor: "WOODARD S" },
  { section: "BIOT-645-600", A: 12, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "YOUNG C" },
  { section: "BIOT-645-601", A: 11, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "YOUNG C" },
  { section: "BIOT-689-600", A: 17, B: 8, C: 3, D: 0, F: 0, GPA: 3.5, Q: 1, Instructor: "REEVES B" },
  { section: "CHEN-201-500", A: 61, B: 21, C: 8, D: 0, F: 1, GPA: 3.549, Q: 2, Instructor: "HOLTZAPPLE M" },
  { section: "CHEN-201-501", A: 11, B: 10, C: 3, D: 0, F: 0, GPA: 3.333, Q: 0, Instructor: "HOLTZAPPLE M" },
  { section: "CHEN-201-502", A: 55, B: 5, C: 2, D: 1, F: 0, GPA: 3.809, Q: 2, Instructor: "HOLTZAPPLE M" },
  { section: "CHEN-204-201", A: 3, B: 1, C: 1, D: 0, F: 0, GPA: 3.4, Q: 0, Instructor: "JAYARAMAN A" },
  { section: "BIOT-635-600", A: 17, B: 12, C: 0, D: 0, F: 0, GPA: 3.586, Q: 1, Instructor: "WOODARD S" },
  { section: "BIOT-645-600", A: 12, B: 0, C: 0, D: 0, F: 0, GPA: 4.000, Q: 0, Instructor: "YOUNG C" },
  { section: "BIOT-645-601", A: 12, B: 0, C: 0, D: 0, F: 0, GPA: 4.000, Q: 0, Instructor: "YOUNG C" },
  { section: "BIOT-689-600", A: 17, B: 8, C: 3, D: 0, F: 0, GPA: 3.500, Q: 0, Instructor: "REEVES B" },
  { section: "CHEN-201-500", A: 61, B: 21, C: 8, D: 0, F: 1, GPA: 3.549, Q: 2, Instructor: "HOLTZAPPLE M" },
  { section: "CHEN-201-501", A: 11, B: 10, C: 3, D: 0, F: 0, GPA: 3.333, Q: 0, Instructor: "HOLTZAPPLE M" },
  { section: "CHEN-201-502", A: 55, B: 5, C: 2, D: 1, F: 0, GPA: 3.809, Q: 2, Instructor: "HOLTZAPPLE M" },
  { section: "CHEN-204-201", A: 3, B: 1, C: 1, D: 0, F: 0, GPA: 3.400, Q: 0, Instructor: "JAYARAMAN A" },
  { section: "CHEN-354-500", A: 25, B: 34, C: 28, D: 4, F: 0, GPA: 2.879, Q: 3, Instructor: "MITTAL J" },
  { section: "CHEN-354-501", A: 30, B: 22, C: 31, D: 6, F: 0, GPA: 2.853, Q: 4, Instructor: "BALBUENA P" },
  { section: "CHEN-364-501", A: 17, B: 45, C: 10, D: 0, F: 0, GPA: 3.097, Q: 0, Instructor: "SHETTY M" },
  { section: "CHEN-374-500", A: 8, B: 0, C: 0, D: 0, F: 0, GPA: 4.000, Q: 0, Instructor: "BLIZZARD G" },
  { section: "CHEN-422-500", A: 1, B: 3, C: 4, D: 0, F: 0, GPA: 2.625, Q: 0, Instructor: "MOREIRA R" },
  { section: "CHEN-425-501", A: 20, B: 22, C: 3, D: 0, F: 0, GPA: 3.377, Q: 0, Instructor: "EL-HALWAGI M" },
  { section: "CHEN-425-502", A: 56, B: 17, C: 1, D: 0, F: 0, GPA: 3.743, Q: 0, Instructor: "RODDEN J" },
  { section: "CVEN-207-900", A: 20, B: 4, C: 0, D: 0, F: 0, GPA: 3.833, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-901", A: 21, B: 1, C: 0, D: 1, F: 0, GPA: 3.826, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-902", A: 21, B: 3, C: 0, D: 0, F: 0, GPA: 3.875, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-903", A: 22, B: 2, C: 0, D: 0, F: 0, GPA: 3.916, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-904", A: 20, B: 2, C: 0, D: 1, F: 0, GPA: 3.782, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-905", A: 21, B: 2, C: 0, D: 0, F: 0, GPA: 3.913, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-906", A: 21, B: 2, C: 1, D: 0, F: 0, GPA: 3.833, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-207-907", A: 21, B: 2, C: 1, D: 1, F: 0, GPA: 3.720, Q: 0, Instructor: "APPLETON R" },
  { section: "CVEN-221-501", A: 8, B: 21, C: 23, D: 8, F: 1, GPA: 2.442, Q: 0, Instructor: "MERCIER R" },
  { section: "CVEN-221-502", A: 21, B: 26, C: 21, D: 4, F: 5, GPA: 2.701, Q: 0, Instructor: "POLLALIS W" },
  { section: "CVEN-221-503", A: 10, B: 33, C: 25, D: 3, F: 0, GPA: 2.704, Q: 0, Instructor: "MERCIER R" },
  { section: "CYBR-201-500", A: 72, B: 4, C: 0, D: 0, F: 0, GPA: 3.947, Q: 2, Instructor: "ROMERO J" },
  { section: "CYBR-402-500", A: 5, B: 2, C: 0, D: 0, F: 0, GPA: 3.714, Q: 0, Instructor: "DEWITTE P" },
  { section: "CYBR-403-501", A: 5, B: 4, C: 1, D: 0, F: 0, GPA: 3.4, Q: 2, Instructor: "ANWAR S" },
  { section: "CYBR-405-500", A: 45, B: 0, C: 1, D: 0, F: 0, GPA: 3.956, Q: 1, Instructor: "PRICE P" },
  { section: "CYBR-602-601", A: 12, B: 0, C: 0, D: 0, F: 0, GPA: 4.0, Q: 0, Instructor: "DEWITTE P" },
  { section: "CYBR-603-600", A: 12, B: 1, C: 0, D: 0, F: 0, GPA: 3.923, Q: 0, Instructor: "DEWITTE P" },
  { section: "CYBR-604-600", A: 7, B: 6, C: 1, D: 0, F: 0, GPA: 3.428, Q: 0, Instructor: "CARLISLE M" },
  { section: "ENGR-102-201", A: 24, B: 12, C: 1, D: 0, F: 0, GPA: 3.621, Q: 0, Instructor: "CAHILL A" },
  { section: "ENGR-102-203", A: 33, B: 6, C: 1, D: 0, F: 1, GPA: 3.707, Q: 0, Instructor: "MOORE J" },
  { section: "ENGR-102-204", A: 29, B: 10, C: 1, D: 0, F: 0, GPA: 3.7, Q: 0, Instructor: "SPEARS C" },
  { section: "ENGR-102-207", A: 35, B: 7, C: 0, D: 0, F: 0, GPA: 3.833, Q: 0, Instructor: "MCKENZIE J" },
  { section: "ENGR-102-208", A: 34, B: 6, C: 3, D: 0, F: 0, GPA: 3.72, Q: 0, Instructor: "ELMS R" },
  { section: "ENGR-102-209", A: 27, B: 7, C: 1, D: 0, F: 0, GPA: 3.742, Q: 0, Instructor: "ELMS R" },
  { section: "ENGR-102-210", A: 26, B: 5, C: 1, D: 0, F: 0, GPA: 3.781, Q: 0, Instructor: "MORRIS E" },
  { section: "ENGR-102-216", A: 31, B: 12, C: 0, D: 0, F: 1, GPA: 3.636, Q: 0, Instructor: "OSTROVSKAYA N" },
  { section: "ENGR-102-217", A: 34, B: 7, C: 1, D: 2, F: 0, GPA: 3.659, Q: 0, Instructor: "OSTROVSKAYA N" },
  { section: "CSCE-110-500", A: 2, B: 10, C: 5, D: 2, F: 2, GPA: 2.380, Q: 3, Instructor: "YUM K" },
  { section: "CSCE-110-501", A: 5, B: 9, C: 2, D: 0, F: 2, GPA: 2.833, Q: 3, Instructor: "YUM K" },
  { section: "CSCE-110-502", A: 4, B: 11, C: 7, D: 0, F: 0, GPA: 2.863, Q: 2, Instructor: "YUM K" },
  { section: "CSCE-110-503", A: 3, B: 4, C: 5, D: 2, F: 1, GPA: 2.400, Q: 0, Instructor: "YUM K" },
  { section: "CSCE-110-504", A: 6, B: 13, C: 4, D: 1, F: 0, GPA: 3.000, Q: 0, Instructor: "YUM K" },
  { section: "CSCE-110-505", A: 9, B: 9, C: 4, D: 1, F: 0, GPA: 3.130, Q: 0, Instructor: "YUM K" },
  { section: "CSCE-110-506", A: 7, B: 8, C: 8, D: 0, F: 0, GPA: 2.956, Q: 1, Instructor: "YUM K" },
  { section: "CSCE-110-507", A: 6, B: 4, C: 9, D: 1, F: 1, GPA: 2.619, Q: 0, Instructor: "YUM K" },
  { section: "CSCE-111-500", A: 16, B: 2, C: 0, D: 1, F: 2, GPA: 3.380, Q: 3, Instructor: "MAHMOOD M" },
  { section: "CSCE-111-501", A: 20, B: 0, C: 0, D: 1, F: 1, GPA: 3.681, Q: 0, Instructor: "MAHMOOD M" },
  { section: "CSCE-111-502", A: 14, B: 2, C: 0, D: 2, F: 3, GPA: 3.047, Q: 3, Instructor: "MAHMOOD M" },
  { section: "CSCE-111-503", A: 10, B: 1, C: 0, D: 1, F: 4, GPA: 2.750, Q: 3, Instructor: "MAHMOOD M" },
];
// Sorting logic
function sortData(data) {
    return data.sort((a, b) => {
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
  }
  
  // Display data
  function displayData(data) {
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous results
  
    if (data.length === 0) {
      output.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    data.forEach((professor, index) => {
      const infoDiv = document.createElement("div");
      infoDiv.className = "professor-info"; // Optional: Add a class for styling
  
      infoDiv.innerHTML = `
        <p id="rank">${index + 1}</p>
        <p id="instructor">Instructor: ${professor.Instructor}</p>
        <p id="class">Class: ${professor.section}</p>
        <p id="gpa">GPA: ${professor.GPA.toFixed(2)}</p>
        <p id="drops">Q-Drops: ${professor.Q}</p>
      `;
  
      output.appendChild(infoDiv);
    });
  }
  
  // Event listener for search button
  document.getElementById("searchButton").addEventListener("click", () => {
    const subject = document.getElementById("subjectDropdown").value;
    const course = document.getElementById("courseInput").value.trim();
  
    let filteredData = data;
  
    // Filter by subject
    if (subject) {
      filteredData = filteredData.filter((entry) => entry.section.startsWith(subject));
    }
  
    // Filter by course number
    if (course) {
      filteredData = filteredData.filter((entry) => entry.section.includes(course));
    }
  
    // Sort and display the filtered data
    const sortedData = sortData(filteredData);
    displayData(sortedData);
  });

  document.getElementById("showAllButton").addEventListener("click", () => {
    displayData(sortData(data)); // Display all data sorted
  });  
  
  // Display all data initially
  displayData(sortData(data));
  