const CoffeeType: string[] = ["Espresso", "Americano"]
const coffeePrice: number[] = [80, 100]

const rating: Array<number> = [4.5, 4.0, 3.5]
const coffeeMenu: Array<{type: string, price: number}> = [
    {type: "Espresso", price: 80},
    {type: "Americano", price: 100}
]

// multi Dimensional Array

const table: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Tuple 
const coffeeOrder: [string, number, boolean] = ["Espresso", 2, true];

// Tuple Array
const coffeeOrders: [string, number][] = [
    ["Espresso", 2],
    ["Americano", 1],
    ["Cappuccino", 3]
]

let userInfo: [string, number, boolean?];
userInfo = ["john", 25, true];
userInfo = ["doe", 30];

// readonly Tuple
let adminInfo: readonly [string, number] = ["admin", 1];
// adminInfo[0] = "superadmin"; // Error: Cannot assign to '0' because it is a read-only property.

// Enum
enum CupSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

const myCup: CupSize = CupSize.MEDIUM;

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED //102
}

enum DrinkType {
    TEA = "tea",
    COFFEE = "coffee",
    JUICE = "juice"
}

function orderDrink(drink: DrinkType): string {
    return `You have ordered a ${drink}`;
}   
orderDrink(DrinkType.COFFEE);
//orderDrink("tea"); // Error: Argument of type '"tea"' is not assignable to parameter of type 'DrinkType'.

enum randomEnum {
    ID = 1,
    NAME = "jogger"
}

const enum SugarLevel {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = SugarLevel.HIGH;