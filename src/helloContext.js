import React, { useContext } from 'react';
import { UserContext } from './App';


const HelloContext = () => {
    const day= useContext(UserContext);
    return ( <div className="">{day}</div> );
}
 
export default HelloContext;