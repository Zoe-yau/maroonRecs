const data = [
    {
      name: "Professor A",
      ratingDistribution: [5, 3, 2], // 5-star: 5, 4-star: 3, 3-star: 2
      totalRatings: 10
    },
    {
      name: "Professor B",
      ratingDistribution: [8, 2, 1],
      totalRatings: 11
    }
  ];
  
  function calculateAverageRating(ratingDistribution) {
    const totalRatings = ratingDistribution.reduce((sum, count) => sum + count, 0);
    const weightedSum = ratingDistribution.reduce((sum, count, index) => sum + count * (index + 1), 0);
    return totalRatings === 0 ? 0 : weightedSum / totalRatings;
  }
  
  function sortData(data) {
    return data.sort((a, b) => {
      const avgA = calculateAverageRating(a.ratingDistribution);
      const avgB = calculateAverageRating(b.ratingDistribution);
  
      // First, sort by average rating (descending)
      if (avgB !== avgA) return avgB - avgA;
  
      // If average ratings are the same, sort by total ratings (descending)
      return b.totalRatings - a.totalRatings;
    });
  }
  
  const sortedData = sortData(data);
  console.log(sortedData);
  