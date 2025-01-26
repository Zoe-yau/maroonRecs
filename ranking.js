// const output = document.querySelector("#output")

// console.log(output)
// const childNode = document.createElement('div');
// childNode.textContent = 'I am a child node!';

// output.appendChild(childNode)

// const data = [
// {
//     rank: 1 + 1,
//     instructor: "Hello",
//     course: "A",
//     gpa: 4,
//     qDrops: 2,
//     score: 2.2,
// },
// {
//     rank: 1 + 2,
//     instructor: "test",
//     course: "b",
//     gpa: 2,
//     qDrops: 2,
//     score: 2.2,
// }
// ]

// data.forEach((professor) => {
//     // Create a new child div for each professor
//     const infoDiv = document.createElement('div');
//     infoDiv.className = 'professor-info'; // Optional: Add a class for styling

//     // Add the professor's details as inner HTML
//     infoDiv.innerHTML = `
//         <p>Rank: ${professor.rank}</p>
//         <p>Instructor: ${professor.instructor}</p>
//         <p>Course: ${professor.course}</p>
//         <p>GPA: ${professor.gpa}</p>
//         <p>Q-Drops: ${professor.qDrops}</p>
//         <p>Score: ${professor.score}</p>
//     `;

//     // Append the child div to the parent div
//     output.appendChild(infoDiv);
// });

// const rawData = `
// ENGR-102-201 24
//  64.86%
//  12
//  32.43%
//  1
//  2.70%
//  0
//  0.00%
//  0
//  0.00%
//  37 3.621 0 0 0 0 0 37 CAHILL A
// ENGR-102-203 33
//  80.49%
//  6
//  14.63%
//  1
//  2.44%
//  0
//  0.00%
//  1
//  2.44%
//  41 3.707 0 0 0 0 0 41 MOORE J
// ENGR-102-204 29
//  72.50%
//  10
//  25.00%
//  1
//  2.50%
//  0
//  0.00%
//  0
//  0.00%
//  40 3.700 0 0 0 0 0 40 SPEARS C
// ENGR-102-207 35
//  83.33%
//  7
//  16.67%
//  0
//  0.00%
//  0
//  0.00%
//  0
//  0.00%
//  42 3.833 0 0 0 0 0 42 MCKENZIE J
// `;

// // Step 1: Parse raw data
// const parseData = (data) => {
//   const lines = data.trim().split('\n');
//   const parsedData = [];

//   for (let i = 0; i < lines.length; i += 8) {
//     const courseLine = lines[i].split(' ');
//     const gpaLine = lines[i + 7].split(' ');

//     parsedData.push({
//       course: courseLine[0],
//       totalStudents: parseInt(courseLine[1]),
//       percentageA: parseFloat(lines[i + 1]),
//       percentageB: parseFloat(lines[i + 2]),
//       percentageC: parseFloat(lines[i + 3]),
//       percentageD: parseFloat(lines[i + 4]),
//       percentageF: parseFloat(lines[i + 5]),
//       gpa: parseFloat(gpaLine[1]),
//       qDrops: parseInt(gpaLine[5]), // Extract 'Q' drops
//       instructor: gpaLine.slice(2).join(' '),
//     });
//   }

//   return parsedData;
// };

// // Step 2: Calculate a ranking score
// const calculateScore = (professor) => {
//   const gradeWeight = 0.6;
//   const gpaWeight = 0.3;
//   const dropPenalty = 0.1;

//   const gradeScore =
//     professor.percentageA +
//     professor.percentageB * 0.75 +
//     professor.percentageC * 0.5 -
//     professor.percentageD * 0.5 -
//     professor.percentageF * 1;

//   const gpaScore = professor.gpa;
//   const dropScore = -professor.qDrops; // Penalize high drops

//   return (
//     gradeWeight * gradeScore + gpaWeight * gpaScore + dropPenalty * dropScore
//   );
// };

// // Step 3: Sort professors by score
// const rankProfessors = (data) => {
//   return data
//     .map((professor) => ({
//       ...professor,
//       score: calculateScore(professor),
//     }))
//     .sort((a, b) => b.score - a.score); // Sort descending by score
// };

// // Step 4: Execute parsing, scoring, and ranking
// const parsedData = parseData(rawData);
// const rankedProfessors = rankProfessors(parsedData);

// // Step 5: Display rankings
// console.log(
//   rankedProfessors.map((professor, index) => ({
//     rank: index + 1,
//     instructor: professor.instructor,
//     course: professor.course,
//     gpa: professor.gpa,
//     qDrops: professor.qDrops,
//     score: professor.score.toFixed(2),
//   }))
// );
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
        <p>Rank: ${index + 1}</p>
        <p>Instructor: ${professor.Instructor}</p>
        <p>Class: ${professor.section}</p>
        <p>GPA: ${professor.GPA.toFixed(2)}</p>
        <p>Q-Drops: ${professor.Q}</p>
    `;

  // Append the child div to the parent div
  output.appendChild(infoDiv);
});
