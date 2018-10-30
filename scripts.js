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
    const val = parseFloat(value);
    return isNaN(val) ? null : val * curse;
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

    return array.reduce((el, current) => el + current, 0) / array.length;
}

/*
************** TASK 2 **************
*/

function haha(number) {
    console.info(number);
    if (number === 1)
        return number;

    haha(number - 1);
}