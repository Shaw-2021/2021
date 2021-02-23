import React, { useState } from 'react';

const HelloState = () => {
  const [count, setCount]=useState(0);

  const add=()=>setCount(count+1);
  const sub=()=>setCount(count-1);
  const reset=()=>setCount(0);

    return ( <div className="">
    <h1>{count}</h1>
    <button onClick={add}>add</button>
    <button onClick={sub}>sub</button>
    <button onClick={reset}>reset</button>
    </div> );
}
 
export default HelloState;