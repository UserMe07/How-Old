// Write your function here:
const howOld = function(age, year) {
      if (year > 2020) {
        const years = year - 2020;
        const calculatedAge = age + years;
        return `You will be ${calculatedAge} in the year ${year}`;
      }
      else if (year < (2020 - age)) {
        const calculatedYears = (2020 - age) - year;
        return `The year ${year} was ${calculatedYears} years before you were born`;
      }
      else if (year > (2020 - age) && year < 2020) {
          const calculatedAge2 = year - (2020 - age);
          return `You were ${calculatedAge2} in the year ${year}`;
      }
      else {`Incorrect number!`};
};

console.log(howOld(25, 2021));




// Once your function is written, write function calls to test your code!
