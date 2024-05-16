"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(cityName, countryName = "India") {
    console.log(`${cityName} is in ${countryName}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Delhi");
