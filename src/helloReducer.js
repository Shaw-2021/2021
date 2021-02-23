import React, { useReducer } from 'react';

const initialState=0;
const reducer=(state, action)=>{
  switch(action){
   case 'add':
       return state+1
   case 'sub':
       return state-1
   case 'reset':
       return initialState
   default:
       return state
  }
}

const HelloReducer = () => {

    const [count, dispatch]=useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return ( <div>
      <h1> {count}</h1>
      <button onClick={() => dispatch('add')}>add</button>
	  <button onClick={() => dispatch('sub')}>sub</button>
	 <button onClick={() => dispatch('reset')}>Reset</button>

     <h1> {countTwo}</h1>
      <button onClick={() => dispatchTwo('add')}>add</button>
	  <button onClick={() => dispatchTwo('sub')}>sub</button>
	 <button onClick={() => dispatchTwo('reset')}>Reset</button>



		</div> );
}
 
export default HelloReducer;