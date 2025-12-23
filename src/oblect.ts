const chai = {
    name: "Masala Chai",
    price: 30,
    isHot: true
}

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 30,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[];

}

const apkiChai: Tea = {
    name: "adrak chai",
    price: 30,
    ingredients: ["water", "milk", "tea Leaves", "ginger"]
}

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"};

let largeCup = {size: "500ml", material: "cyramic"}

smallCup = largeCup;

type Brew = {brewTime: number};

const coffee = {brewTime: 5, beans: "arabica"};
const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: string;
}

const newUser: User = {
    username: "teaLover",
    password: "securePassword123"
}

type Item = {name: string, quantity: number};
type Address = {street: string, city: string, zipCode: string};

type order = {
    id: string;
    items: Item[];
    address: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updateChai({price: 45});

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({name: "Masala Chai", quantity: 2});

type Car = {
    name: string;
    price: number;
    isElectric: boolean;
    parts: string[];
}

type BasicCarInfo = Pick<Car, "name" | "price" | "isElectric">;

const carDetails: BasicCarInfo = {
    name: "Tesla Model 3",
    price: 50000,
    isElectric: true
}

type CarNew = {
    name: string;
    price: number;
    isElectric: boolean;
    secretParts: string;
};

type PublicCarInfo = Omit<CarNew, "secretParts">;