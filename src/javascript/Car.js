class Car {
  totalKm = 0;

  ride(km) {
    this.totalKm = this.totalKm + km;
    return km + "Km riden total km = " + this.totalKm;
  }
}

export default Car;
