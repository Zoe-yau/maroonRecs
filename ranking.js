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

// Raw data (ENGR 102 courses only)
const rawData = `
ENGR-102-201 24
 64.86%
 12
 32.43%
 1
 2.70%
 0
 0.00%
 0
 0.00%
 37 3.621 0 0 0 0 0 37 CAHILL A
ENGR-102-203 33
 80.49%
 6
 14.63%
 1
 2.44%
 0
 0.00%
 1
 2.44%
 41 3.707 0 0 0 0 0 41 MOORE J
ENGR-102-204 29
 72.50%
 10
 25.00%
 1
 2.50%
 0
 0.00%
 0
 0.00%
 40 3.700 0 0 0 0 0 40 SPEARS C
ENGR-102-207 35
 83.33%
 7
 16.67%
 0
 0.00%
 0
 0.00%
 0
 0.00%
 42 3.833 0 0 0 0 0 42 MCKENZIE J
ENGR-102-208 34
 79.07%
 6
 13.95%
 3
 6.98%
 0
 0.00%
 0
 0.00%
 43 3.720 0 0 0 0 0 43 ELMS R
ENGR-102-209 27
 77.14%
 7
 20.00%
 1
 2.86%
 0
 0.00%
 0
 0.00%
 35 3.742 0 0 0 0 0 35 ELMS R
ENGR-102-210 26
 81.25%
 5
 15.63%
 1
 3.13%
 0
 0.00%
 0
 0.00%
 32 3.781 0 0 0 0 0 32 MORRIS E
ENGR-102-216 31
 70.45%
 12
 27.27%
 0
 0.00%
 0
 0.00%
 1
 2.27%
 44 3.636 0 0 0 0 0 44 OSTROVSKAYA N
ENGR-102-217 34
 77.27%
 7
 15.91%
 1
 2.27%
 2
 4.55%
 0
 0.00%
 44 3.659 0 0 0 0 0 44 OSTROVSKAYA N
`;

// Parse ENGR-102 data
const parseData = (data) => {
  const lines = data.trim().split("\n");
  const parsedData = [];

  for (let i = 0; i < lines.length; i += 8) {
    if (lines[i] && lines[i + 7]) {
      const courseLine = lines[i].split(" ");
      const gpaLine = lines[i + 7].split(" ");

      parsedData.push({
        course: courseLine[0],
        percentageA: parseFloat(lines[i + 1].replace("%", "")) || 0,
        percentageB: parseFloat(lines[i + 2].replace("%", "")) || 0,
        percentageC: parseFloat(lines[i + 3].replace("%", "")) || 0,
        percentageD: parseFloat(lines[i + 4].replace("%", "")) || 0,
        percentageF: parseFloat(lines[i + 5].replace("%", "")) || 0,
        gpa: parseFloat(gpaLine[1]) || 0,
        instructor: gpaLine.slice(2).join(" ") || "Unknown",
      });
    } else {
      console.warn(`Incomplete data block at line ${i}`);
    }
  }

  return parsedData;
};

// Parse and display ENGR-102 courses
const parsedData = parseData(rawData);

parsedData.forEach((professor) => {
  const infoDiv = document.createElement("div");
  infoDiv.className = "professor-info";

  infoDiv.innerHTML = `
    <h3>Course: ${professor.course}</h3>
    <p><strong>Instructor:</strong> ${professor.instructor}</p>
    <p><strong>Percentage A:</strong> ${professor.percentageA}%</p>
    <p><strong>Percentage B:</strong> ${professor.percentageB}%</p>
    <p><strong>Percentage C:</strong> ${professor.percentageC}%</p>
    <p><strong>Percentage D:</strong> ${professor.percentageD}%</p>
    <p><strong>Percentage F:</strong> ${professor.percentageF}%</p>
    <p><strong>GPA:</strong> ${professor.gpa.toFixed(2)}</p>
  `;

  output.appendChild(infoDiv);
});
