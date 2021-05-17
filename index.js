//use .slice() non-destructive where first arg is start and second is end
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

//.slice() with a negative will take last elements with the argument being the number of elements to retrieve
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}