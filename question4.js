let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

getDay = (day, days, weeks) => {

  console.log(`You entered a start day of ${day}, ${days} day(s) and ${weeks} week(s) in the future`);

  startDayIndex = daysOfWeek.indexOf(`${day}`);

  increment = days % 7;

  indexOfReturnDay = startDayIndex + increment;

  if (indexOfReturnDay > 6) {
    indexOfReturnDay -= 6
  }

  returnDay = daysOfWeek[`${indexOfReturnDay}`];

  console.log(`The answer is:  ${returnDay}`);

  return returnDay;
};

getDay("Sunday", 100, 0);
getDay("Tuesday", 2, 4);
getDay("Friday", 294, 0);
