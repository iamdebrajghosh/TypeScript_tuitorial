// class Chai {
//     flavor: string;
//    // price: number;

//     // constructor(flavor: string, price: number) {
//     //     this.flavor = flavor;
//     //     this.price = price;
//     // }
//     constructor(flavor: string) {
//         this.flavor = flavor;
//         console.log(this);
//     }
// }

// const masalaChai = new Chai("ginger");
// masalaChai.flavor = "masala";
// masalaChai.price = 30;

//access Modifiers: public, private, protected

class Chai {
    public flavor: string = "masala";
    private secretIngredient = "Cardamom";

    reveal(){
        console.log(`The secret ingredient is ${this.secretIngredient}`);
    }
}


class Shop {
    protected staffDore = "Dore";
}

class cafe extends Shop {
    getStaffDore(){
        return this.staffDore;
    }
}

class Walet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet();

class Cup{
    readonly capacity: number = 256;

    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class ModernChai {
    private _sugar = 5

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if(value > 6) throw new Error("Too much sugar");
        this._sugar = value;
    }
}

const c = new ModernChai();
c.sugar = 4;
console.log(c.sugar);


class EkChai {
    static shopName = "Chai Point"
    

    constructor(public flavor: string){}
}
console.log(EkChai.shopName);

// Abstract Class

abstract class Drink{
    abstract prepare(): void;
}

class makeCoffee extends Drink{
    prepare(): void {
        console.log("Coffee is being prepared");
    }
}

class Heater {
    heat() {}
}

class CoffeeMaker {
    constructor(private heater: Heater){}

    makeCoffee(){
        this.heater.heat();
        console.log("Coffee is made");
    }
}
