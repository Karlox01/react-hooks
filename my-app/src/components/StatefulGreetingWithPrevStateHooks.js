import React, { useState } from "react";

function StatefulGreetingWithPrevState(props) {
    const [introduction, setIntroduction] = useState("Hello!");
    const [buttonText, setButtonText] = useState("Exit");
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setIntroduction((prevState) =>
            prevState === "Hello!" ? "Goodbye!" : "Hello!"
        );
        setButtonText((prevButton) =>
            prevButton === "Exit" ? "Enter" : "Exit"
        );
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            increment();
        }
    };

    return (
        <div>
            <h1>
                {introduction} {props.greeting}
            </h1>
            <button onClick={handleClick}>{buttonText}</button>
            <button onClick={incrementFive}>Increment five</button>
            <p>You've clicked {count} times</p>
        </div>
    );
}

export default StatefulGreetingWithPrevState;
