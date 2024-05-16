"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(Manufacturer, Model, ...options) {
    const car = {
        Manufacturer: Manufacturer,
        Model: Model
    };
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        car[option[0]] = option[1];
    }
    return car;
}
const myCar = createCar("Toyota", "Corolla", ["Color", "Black"], ["Year", 2022]);
console.log(myCar);
