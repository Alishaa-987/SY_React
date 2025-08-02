import React from 'react'
 import {useState} from 'react';
function Register() {
    const [number , setNumber] = useState(0);
    const data = 'alisha'

  return (
    <div>
        <h1>{number}</h1>
<button onClick={() => setNumber(number + 1)}>Button</button>
    </div>
  )
}

export default Register


// agr hmm arrow function nahi lagate ho wo multiple time rernder karvae gaa so 