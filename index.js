function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

const newScooter = new Scooter(2014, "red", "fast");

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

const newDriver = new Driver("Linda", 37, "expert");

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

const newPickupLocation = new PickupLocation("123 A Street", "San Francisco");