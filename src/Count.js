import { useState } from "react";
import Greeting from "./Greeting";

export default function Count() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <Greeting count={count} />
        </div>
    );
}