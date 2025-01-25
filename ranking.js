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
`;

// Step 1: Parse raw data
const parseData = (data) => {
  const lines = data.trim().split('\n');
  const parsedData = [];

  for (let i = 0; i < lines.length; i += 8) {
    const courseLine = lines[i].split(' ');
    const gpaLine = lines[i + 7].split(' ');

    parsedData.push({
      course: courseLine[0],
      totalStudents: parseInt(courseLine[1]),
      percentageA: parseFloat(lines[i + 1]),
      percentageB: parseFloat(lines[i + 2]),
      percentageC: parseFloat(lines[i + 3]),
      percentageD: parseFloat(lines[i + 4]),
      percentageF: parseFloat(lines[i + 5]),
      gpa: parseFloat(gpaLine[1]),
      qDrops: parseInt(gpaLine[5]), // Extract 'Q' drops
      instructor: gpaLine.slice(2).join(' '),
    });
  }

  return parsedData;
};

// Step 2: Calculate a ranking score
const calculateScore = (professor) => {
  const gradeWeight = 0.6;
  const gpaWeight = 0.3;
  const dropPenalty = 0.1;

  const gradeScore =
    professor.percentageA +
    professor.percentageB * 0.75 +
    professor.percentageC * 0.5 -
    professor.percentageD * 0.5 -
    professor.percentageF * 1;

  const gpaScore = professor.gpa;
  const dropScore = -professor.qDrops; // Penalize high drops

  return (
    gradeWeight * gradeScore + gpaWeight * gpaScore + dropPenalty * dropScore
  );
};

// Step 3: Sort professors by score
const rankProfessors = (data) => {
  return data
    .map((professor) => ({
      ...professor,
      score: calculateScore(professor),
    }))
    .sort((a, b) => b.score - a.score); // Sort descending by score
};

// Step 4: Execute parsing, scoring, and ranking
const parsedData = parseData(rawData);
const rankedProfessors = rankProfessors(parsedData);

// Step 5: Display rankings
console.log(
  rankedProfessors.map((professor, index) => ({
    rank: index + 1,
    instructor: professor.instructor,
    course: professor.course,
    gpa: professor.gpa,
    qDrops: professor.qDrops,
    score: professor.score.toFixed(2),
  }))
);
