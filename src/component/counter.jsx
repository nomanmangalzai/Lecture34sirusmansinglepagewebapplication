import React from 'react';

const Counter = ({handleIncrement, handleDecrement,count})=> {

    return (
    <div style={{padding:"2rem "}}>
        {count}
        <button onClick={handleDecrement}>--</button>
        {count}
        <button onClick={handleIncrement}>++</button>
        {count}
    </div> );

}
 
export default Counter;