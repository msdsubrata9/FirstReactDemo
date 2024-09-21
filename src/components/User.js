import { useState } from "react";
const User = (props) => {
    const [count, setCount] = useState(0);
    let { name } = props;
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                setCount(count - 1);
            }}>DECREMENT</button>
            <h2>Name: {name}</h2>
            <h3>Location: Berhampore, Murshidabad, West Bengal</h3>
            <h4>Contact: msdsubrata9@gmail.com</h4>
        </div>
    )
}

export default User;