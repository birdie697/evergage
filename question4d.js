monthsOfTheYear = [
  "January",
  "February",
  "March",
  "Apri",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"];

standardYear = {
  "January":31,
  "February":28,
  "March":31,
  "Apri":30,
  "May":31,
  "June":30,
  "July":31,
  "August":31,
  "September":30,
  "October":31,
  "November":30,
  "December":31
};

leapYear = {
  "January":31,
  "February":29,
  "March":31,
  "Apri":30,
  "May":31,
  "June":30,
  "July":31,
  "August":31,
  "September":30,
  "October":31,
  "November":30,
  "December":31
};

isLeapYear = (year) => {
  if (year % 4 == 0 && year % 400 == 0) {
    return leapYear;
  } else if (year % 4 == 0 && year % 100 == 0) {
    return standardYear;
  } else if (year % 4 == 0) {
    return leapYear;
  } else {
    return standardYear;
  }
}

getMonthAndDay = (days, month, day, year) => {

  console.log(`You entered ${days} days from ${month} ${day}, ${year}`);

  typeOfYear = isLeapYear(year);

  // console.log(`February has ${typeOfYear["February"]} days`);

  monthIndex = monthsOfTheYear.indexOf(month);

  while (days > 0) {

    daysInMonth = typeOfYear[month];

    // console.log(`the month index is ${monthIndex}`);
    // console.log(`days in current month is ${daysInMonth}`);

    if (days + day > daysInMonth) {
      days -= daysInMonth - day + 1;

      if (monthIndex != 11) {
        monthIndex ++;
      } else {
        monthIndex = 0;
        year ++;
        typeOfYear = isLeapYear(year);
      }

      day = 1;
      month = monthsOfTheYear[monthIndex];

    } else {

      day += days;
      days = 0;
    }

    // console.log(`Status:  days ${days}, date: ${month} ${day}, ${year}`)

  }

  // console.log(`New date is ${month} ${day}, ${year}`);

  return {
    month: month,
    day: day,
    year: year
  };
}

newDate = getMonthAndDay(73, "October", 31, 2018);
console.log(`Here is the result ${newDate.month} ${newDate.day}, ${newDate.year}`);
