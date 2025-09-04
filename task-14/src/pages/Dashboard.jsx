import React, { useState } from 'react'
import CounterCard from '../components/CounterCard.jsx'

function Dashboard() {
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "cennter", background: "#f4f4f9" }}>
      <CounterCard
        title="Counter-Card"
        count={count}
        increase={increase}
        decrease={decrease}
      />
    </div>
  )
}

export default Dashboard



/*
 Through this method we can incrase or decrase both function through one state not by a lot of state

cont [increment , setIncrement] = useState(0)


return(
<button onClick={()=>{setIncremtnt = (incrmetn + 1)}></button>
<button onClick={()=>{setIncremtnt = (incrment - 1)}></button>


)
thats just another way of writing that things wiht increment and decrement 
<button   call={setIncrement}  name={increament}>
*/
