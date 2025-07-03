const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val));
};
console.log(removeFromArray([1, 2, 3], 5, 1));
// Do not edit below this line
module.exports = removeFromArray;
