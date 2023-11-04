import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]); 
    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
    }, []);
    // you have to specify the count after the function otherwise it will re render any time something else is rendered or [] an empty array this means it will only render once from the start, specifying count means it will render every time count is updated
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter