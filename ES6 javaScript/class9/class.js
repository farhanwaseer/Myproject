class Car {

    constructor(model, engin, color, year) {
        this.model = model;
        this.engin = engin;
        this.color = color;
        this.year = year;
    }
}

const corollaGLI = new Car('GLI', 1300, 'White', 2020);
const corollsGrande = new Car('Grande', 1600, 'black', 2020);

console.log(corollaGLI);
console.log(corollsGrande);