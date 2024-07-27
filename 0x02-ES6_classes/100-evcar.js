
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); // Call the parent class's constructor

    // Initialize the EVCar-specific attributes
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    return new Car();
  }
}
