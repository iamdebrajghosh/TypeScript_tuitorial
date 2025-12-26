import { useState } from "react"

interface OrderFromProps {
    onSubmit(order: {name: string; cups: number}): void;
}

export function OrderFrom({onSubmit}: OrderFromProps) {

    const [name, setName] = useState<string>("Capachino");
    const [cups, setCups] = useState<number>(2);


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name, cups});
    }
    return <form onSubmit={handleSubmit}>
        <label>Chai Name</label>
        <input 
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <label>Cup</label>
        <input 
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}
        />
        <button type="submit">Place Your Order</button>
    </form>;
}

export default OrderFrom