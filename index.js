// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

    set diameter(radius) {
      this._diameter = radius*2
    }

    // set circumference(radius) {
    //   this.circumference = 2*Math.PI*radius
    //
    // }

    set area(radius) {
      this._area = Math.PI*radius**2

    }

  get diameter() {

    return this._diameter

  }

  get circumference() {
    return this._circumference
  }

  get area() {
    return this._area
  }


}
