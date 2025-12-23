let responce: any = "420";

let numericaLength: number = (responce as string).length;

type Book = {
    title: string;
}

let bookString = '{"title": "The Great Gatsby"}';
let bookObject: Book = JSON.parse(bookString) as Book;
console.log(numericaLength);

const inputElement = document.getElementById("user-input") as HTMLInputElement;


let value: any;
value = "Hello";
value = [1, 2, 3];
value = 5.6;
value.toUpperCase();

let newValue: unknown;

newValue = "test";
newValue = [1, 2, 3];
newValue = 5.6;


if (typeof newValue === "string") {
    newValue.toUpperCase();
}

try {

}catch (error){
    if( error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}

const data: unknown = "sample data";
const stringData: string = data as string;


type Role = "admin" | "user" | "guest";

function redirectBasedRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirect to user dashboard");
        return;
    }
    if(role === "guest"){
        console.log("Redirect to guest dashboard");
        return;
    }
    role;
}

function neverReturns(): never{
    while(true){}
}