const getNumberOfDays = (date) => {
  // console.log(date);
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

// month-day-year
// console.log(getNumberOfDays("2021-10-22")) //0
// console.log(getNumberOfDays("2021-10-23"))  //1
// console.log(getNumberOfDays("2021-10-21"))  //-1

module.exports = getNumberOfDays