import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    
    let counterValue = useContext(counterContext)
    return (
        <div>
            <h2>this is Child</h2>
            <h2>Counter Value is :  {counterValue[0]}</h2>

            <button onClick={ () => { counterValue[1]( ++counterValue[0]) } }>
                Increment
            </button>
        </div>
    );
}

export default Child;