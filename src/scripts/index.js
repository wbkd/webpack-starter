
/*
let trackCar = function(carId, city='NY'){
    console.log(`Tracking ${carId} in ${city}.`);
};
console.log(trackCar(123));
console.log(trackCar(123, 'Chicago'));

function Car(id) {
    this.carId = id;
}    
Car.prototype.start = function() {
    console.log('start: ' + this.carId);
};
let car = new Car(123);
car.start();

let automobile = {
    id: 123,
    style: 'convertible'
};

console.log( JSON.stringify(automobile) );

let carIds = [
    { carId: 123 },
    { carId: 456 },
    { carId: 789 }
];

console.log( JSON.stringify(carIds) );

let jsonIn = 
`
[
    { "carId" : 123 },
    { "carId" : 456 },
    { "carId" : 789 }
]
`;

let carIdsJson = JSON.parse(jsonIn);
console.log( carIdsJson );

let carIdsArray = [
    { "carId" : 123, style: 'sedan' },
    { "carId" : 456, style: 'convertible' },
    { "carId" : 789, style: 'pick up' }
];
let sedan = carIdsArray.filter( car => car.style === 'sedan' );

let result = carIdsArray.every( car => car.carId > 0 );

let cars = carIds.find( car => car.carId > 500 );

carIdsArray.forEach( car => console.log( car ));

carIdsArray.forEach(
    (car,index) => console.log( car, index ));

console.log(sedan);

console.log(result)

console.log(cars);
*/

class Car {
    constructor(id){
        this.id = id;
    }
    identify() {
        return `Car Id: ${this.id}`;
    }
}
let carr= new Car(123);
console.log( carr.id );