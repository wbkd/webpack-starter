// Rest Parameters

function sendCars(...allCarIds) {
    allCarIds.forEach(id => console.log(id));
}

//sendCars('Monday', 100, 200, 555);

// Destructuring Arrays

let carIds = [100, 200, 300];
let [car1, car2] = carIds;

//console.log(car1, car2);

// Destructuring objects

let car = {
    id: 5000,
    style: 'convertable'
};
let id, style;

({
    id,
    style
} = car);

//console.log(id, style);

/// Spread syntax

function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3, rest);
}

let carCodes = [1, 2, 3, 4, 5, 6];
// startCars(...carCodes);

/// typeof()

//console.log(typeof ('10x'));

/// type conversions
// parseInt();
// parseFloat();

/// contolling loops

let i = 0;
for (; i < 12; i++) {
    if (i === 8) {
        break; // break out of loop
    }
    console.log(i);
}

i = 0;
for (; i < 5; i++) {
    if (i === 2) {
        continue; // skips 2
    }
    console.log(i);
}