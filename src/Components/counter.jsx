import { useState } from "react";
import './counter.css';
import React from 'react'

export default function Counter() {
    let [count,setCount]=useState(0);
    return (
    <div className="main">
        <div><h1>{count}</h1></div>
        <div className="btn">
        <button onClick={()=>setCount(count+=1)} className="button">Increment</button>
        <button onClick={()=>setCount(count=0)} className="button">Reset</button>
        <button onClick={()=>setCount(count-=1)} className="button">Decrement</button>
        </div>
        
    </div>
  )
}
