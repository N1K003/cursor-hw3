/*
************** TASK 1 **************
*/

const usdToUah = 26.0;
const uahToUsd = 1 / 26;


/*
* usage:
* currencyConverter(150, uahToUsd)
* currencyConverter(150, usdToUah)
*/
function currencyConverter(value, curse) {
    return typeof(value) == "number" ? value * curse : null;
}

function logMinMax(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);

    console.info("Min is: " + min);
    console.info("Max is: " + max);
}

function findAverage(array) {
    if (array.length == 0)
        return 0;

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

/*
************** TASK 2 **************
*/

function haha(number) {
    if (number == 1)
        return number;

    console.info(number);
    haha(number - 1);
}