function describe_city(cityName: string, countryName: string = "India") {
    console.log(`${cityName} is in ${countryName}`);
}

describe_city("Karachi", "Pakistan")
describe_city("Paris", "France")
describe_city("Delhi")