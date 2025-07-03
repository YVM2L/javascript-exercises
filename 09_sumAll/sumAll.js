const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; //проверяем целые числа
    if (min < 0 || max < 0) return "ERROR"; // отрицательные числа запрещаются
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
        // меняем на верный порядок
    }

};

// Do not edit below this line
module.exports = sumAll;
