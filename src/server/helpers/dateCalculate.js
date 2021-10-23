const getNumberOfDays = (date) => {
  const currentDate = new Date(Date.now())
  const departDate = new Date(date);

  // One day in milliseconds
  const oneDay = (1000 * 60 * 60 * 24);

  // Calculating the time difference between two dates
  const diffInTime = departDate.getTime() - currentDate.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay) + 1;

  return diffInDays;
}

module.exports = getNumberOfDays