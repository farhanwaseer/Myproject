class Car {

    constructor(model, engin, color, year) {
        this.model = model;
        this.engin = engin;
        this.color = color;
        this.year = year;
    }

    carColor() {
        console.log(`The color is ${this.color}`)
    }
}

const corollaGLI = new Car('GLI', 1300, 'White', 2020);
const corollsGrande = new Car('Grande', 1600, 'black', 2020);

console.log(corollaGLI);
corollaGLI.carColor();


console.log(corollsGrande); 
corollsGrande.carColor();
  
class Dealer extends Car {

    constructor(name, address, model, engin, color, year){
        super(model, engin, color, year)
        this.name = name;
        this.address = address;
    }
}

const dealer1 = new Dealer('Haseeb Motors', 'KHI', 'GLI', 1300, 'Grey', 2020);

console.log(dealer1);