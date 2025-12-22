function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Here is your ${kind} chai.`;
    }
    return `Here is your chai number ${kind}`;
}

function serveChai(msg?: string) {
    if (msg){
        return `${msg} Enjoy your chai!`;
    }
    return 'Enjoy your chai!';
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small" || size === "medium" || size === "large") {
        return `You have ordered a ${size} chai.`;
    }
    return `You have ordered chai number ${size}.`;
}

class KulhadChai {
    serve(){
        return `Here is your chai in a kulhad. Enjoy!`;
    }
}
class MasalaChai {
    serve(){
        return `Here is your chai with extra masala. Enjoy!`;
    }
}

function prepareChai(chai: KulhadChai | MasalaChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function createChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function processChaiOrder(item:ChaiOrder | string) {
    if (createChaiOrder(item)) {
        return `Order received for ${item.type} chai with ${item.sugar} spoons of sugar.`;
    }
    return `Order received for ${item} chai.`;
}

type kattingChai = {
    type: "katting"
    spicelevel: number
}
type gengerChai = {
    type: "genger"
    aroma: number
}
type lalChai = {
    type: "lal"
    amount: number
}

type SpecialChai = kattingChai | gengerChai | lalChai;

function serveSpecialChai(order: SpecialChai) {
    switch (order.type) {
        case "katting":
            return "Serving katting chai with spice level " + order.spicelevel;
            break;
        case "genger":
            return "Serving genger chai with aroma level " + order.aroma;
            break;
        case "lal":
            return "Serving lal chai with amount " + order.amount;
            break;
    }
}

function brew(order: kattingChai | gengerChai){
    if("spicelevel" in order){
        return `Brewing katting chai with spice level ${order.spicelevel}`;
    }
}

function isStringArray(arr: unknown[]): arr is string[] {
    return arr.every(item => typeof item === "string");
}