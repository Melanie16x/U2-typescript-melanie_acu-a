class Car {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`Driving a ${this.make}`)
    }

    getMake(): string {
        return this.make;
    }
}

class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log(`Charging the ${this.getMake}`)
    }
}

const myEletricCar = new ElectricCar("Toyota", 60);
console.log(`Battery Life: ${myEletricCar.batteryLife}%`)
console.log(myEletricCar.charge());
