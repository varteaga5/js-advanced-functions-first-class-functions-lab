// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    let newArr = arr.slice(0,2);
    return newArr;
}
function returnLastTwoDrivers(arr) {
// 1) should return an array of the last two drivers
    let newArr = arr.slice((arr.length - 2));
    return newArr;

}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// 2) has the `returnFirstTwoDrivers` function to as its first element
// 3) has the `returnLastTwoDrivers` function to as its last element
// 4) allows us to invoke either function from the array


function createFareMultiplier(int) {
// 5) returns a function
// 6) should multiply a given value using the created multiplier
    return x => x * int;

}
let fareDoubler = x => x * 2;
// 7) is a function
// 8) doubles fares

let fareTripler = x => x * 3;
// 9) is a function
// 10) triples fares

function selectDifferentDrivers(arrayOfDrivers, fnction) {
// 11) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 12) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
return fnction(arrayOfDrivers)

}

