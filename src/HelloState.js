import React, { useState, useRef  } from 'react';

const HelloState = () => {
  const [count, setCount]=useState(0);
  const [text,setText]=useState('Shaw');
  // const title=useRef();

  const add=()=>setCount(count+1);
  const sub=()=>setCount(count-1);
  const reset=()=>setCount(0);

    return ( <div className="">
    <h1>{text}</h1>
    <input value={text} onChange={event => setText(event.target.value)}
      placeholder="type in..."
      required
    />
    {/* <h1>{title}</h1>
    <input ref={title} type="text" placeholder="color title..." */}
{/* required /> */}
    <h1>{count}</h1>
    <button onClick={add}>add</button>
    <button onClick={sub}>sub</button>
    <button onClick={reset}>reset</button>
    </div> );
}
 
export default HelloState;