const leapYears = function(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
};
console.log(2024, leapYears(2024));
console.log(2025, leapYears(2025));
// Do not edit below this line
module.exports = leapYears;
