import './App.css'
import { Card } from './component/Card.tsx'
import { ChaiCard } from './component/ChaiCard.tsx'
import ChaiList from './component/ChaiList.tsx'
import { Counter } from './component/Counter.tsx'
import OrderFrom from './component/OrderFrom.tsx'

import type { Chai } from './types.ts'
const menu: Chai[] = [
  {
    id: 1,
    name: "Capachino",
    price: 30
  },
  {
    id: 2,
    name: "Americano",
    price: 80
  },
  {
    id: 3,
    name: "Expresso",
    price: 60
  }
]

function App() {
  return (
    <>
      <div>
      <h1>Vite + React</h1>
      <ChaiCard 
      name = "Capachino"
      price = {950}
      />
      <ChaiCard 
      name = "Latte"
      price = {1250}
      />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderFrom 
        onSubmit={(order) => {
          console.log("Placed Order", order.name, order.cups);
        }}
        />
      </div>
      <div>
        <Card
        title='Coffe With TypeScript'
        footer={<button>Order Now!</button>}
        />
      </div>
    </>
  )
}

export default App
