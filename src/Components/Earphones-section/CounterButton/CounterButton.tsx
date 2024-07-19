import { useState } from 'react'
import './CounterButton.css'



const CounterButton = () => {
  const [count, setCount] = useState(1)
  const increase = () => setCount((prevstate) => prevstate + 1)
  const decrease = () => setCount((prevstate) => prevstate > 1 ? prevstate - 1 : 1)
  if (count < 1) {
    setCount(1)
  }

  return (
    <div>
      <div className="counter">
        <button className='plus-minus' onClick={decrease}>-</button>
        <span className='price-span'>{count}</span>
        <button className='plus-minus' onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default CounterButton