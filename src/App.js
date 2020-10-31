import React, { useEffect, useState } from "react";
import Car from "./javascript/Car";
const App = () => {
  const [car, setCar] = useState(undefined);

  // ? this code execute only once at start-up
  useEffect(() => {
    // ! car object creation
    const newCar = new Car();
    console.log("car created");

    // ? simulation of previous ride
    const rideMessage = newCar.ride(1800);
    console.log(rideMessage);

    // ? setting car in state
    setCar(newCar);
  }, []);

  const runKm = (km) => {
    const rideMessage = car.ride(km);
    console.log(rideMessage);
    alert(rideMessage);
  };

  return (
    <>
      <h1>Mon App</h1>
      <button onClick={() => runKm(5)}>Run 5 km</button>
    </>
  );
};

export default App;
