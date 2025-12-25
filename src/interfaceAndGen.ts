interface Coffee {
    type: string;
    price: number;
    milk?: boolean;
}

const myCoffee: Coffee = {
    type: "Latte",
    price: 250,
    milk: true
}

interface Cafe {
    readonly id: number;
    name: string;
}

const myCafe: Cafe = {id: 1, name: "CafeMocha"};

interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface CoffeeMachine{
    start(): void;
    stop(): void;
}

const Machine: CoffeeMachine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }
}


interface CoffeeRating {
    [coffeeType: string]: number;
}

const ratings: CoffeeRating = {
    "Espresso": 5,
    "Latte": 4.5
}

interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: "Alice",
    age: 30
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}