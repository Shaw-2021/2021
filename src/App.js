import './App.css';
import React from 'react';
import Price from './price';
import HelloState from './HelloState';
import HelloContext from './helloContext';
import HelloReducer from './helloReducer';
import StarRating from './star'

export const UserContext=React.createContext();

function App() {
  const date=new Date();
  const year=date.getFullYear();
  const month=date.getMonth()+1;
  const day=date.getDate();
 

  return (
    <div className="App">
        <UserContext.Provider value={day}>   
        <HelloContext />
        </UserContext.Provider>
        <HelloState />
        <HelloReducer />
        <StarRating />
        {/* <Price />    */}
       
      <div className='footer'>{day}/{month}/{year}</div>
    </div>
  );
}

export default App;
