type ChaiOrder = {
    type: string,
    price: number, 
    quantity: number
};


function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize { 
    size: "small" | "medium" | "large" 
}

class Chai implements CupSize {
    size: "small" | "medium" | "large" = "medium";
}

// type Response = {ok: true} | {ok:false}
// class myRes implements Response {
//     ok: boolean = true;
// }

type TeaType = "karak" | "ginger" | "tulsi";

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {karak: number}

type KarakChai = BaseChai & Extra;

const cup: KarakChai = {
    teaLeaves: 3,
    karak: 2
}


type user = {
    username: string;
    bio?: string
}

const u1: user = {username:"john_doe"};
const u2: user = {username:"john_doe" , bio: "john.ai"};

type Config = {
    readonly host: string;
    port: number
}

const cfg: Config = {host: "localhost", port: 8080};