const dayCount = (number) => {
  console.log(number);
  if (number === 1) {
    return 'tomorrow.'
  }
  else if (number > 1) {
    return `${number} days away`
  }
  else {
    return `today.`
  }
}

export {dayCount}