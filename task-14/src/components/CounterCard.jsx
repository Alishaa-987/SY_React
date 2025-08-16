import React from 'react'
import './CounterCard.css' 

function CounterCard({ title, count, increase, decrease }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-count">{count}</p>
      <div className="btn-group">
        <button className="btn btn-inc" onClick={increase}>Increase</button>
        <button className="btn btn-dec" onClick={decrease}>Decrease</button>
      </div>
    </div>
  )
}

export default CounterCard
