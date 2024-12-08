const findTheOldest = (people) => {
  return people.reduce((acc, item) => {
    let age;
    let currentDate = new Date().getFullYear();

    if (!item.yearOfDeath) {
      age = currentDate - item.yearOfBirth;
    } else {
      age = item.yearOfDeath - item.yearOfBirth;
    }

    let oldest = acc.yearOfDeath
      ? acc.yearOfDeath - acc.yearOfBirth
      : currentDate - acc.yearOfBirth;

      return age > oldest ? item : acc;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
