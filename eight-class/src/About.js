import React from 'react'
import { useState } from 'react'

function About() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')


     function check(e) {
    e.preventDefault();

    if (!name) {
      setError('Name is required');
    } else if (!email) {
      setError('Email is required');
    } else if (!password) {
      setError('Password is required');
    } else {
      setError(''); // clear error
      console.log("Foam is Submitted");
    }
  }
    return (
        <div>


            <form onSubmit={check}>
                <h1>My Name is {name}</h1>
                <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
                 <button type='submit'>Submit</button>
                 <p>{error}</p>

            </form>

        </div>
    )
}

export default About