/*
************** TASK 1.1 **************
*/
const usdToUah = 26.0;
const uahToUsd = 1 / 26.0;


/*
* usage:
* currencyConverter(150, uahToUsd)
* currencyConverter(150, usdToUah)
*/
function currencyConverter(value, curse) {
    return typeof(value) == "number" ? value * curse : null;
}

/*
************** TASK 1.2 **************
*/
function minMax(array) {
    return {
        Min: Math.min(...array),
        Max: Math.max(...array)
    }
}

/*
************** TASK 1.3 **************
*/
function findAverage(array) {
    if (!array.length)
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