function makeChai (type: string, cups: number) {
    console.log(`Makeing ${cups} cups of ${type} chai`);
}

makeChai("masala", 2);

function getChai(): number {
    return 35;
}

function makeOrder(order: string) {
    if(!order) return null;
    return `Order for ${order} received`;
}

function logChai(): void {
    console.log("Chai is ready!");
}

// function prepareChai(type?: string){
    
// }
function prepareChai(type: string = "masala") {

}


function createChai(order: {
    type: string;
    cups: number;
    size: "small" | "medium" | "large"
}): number{
    return order.cups * 25;
}