import { useState } from "react";
const User = (props) => {
    const [count, setCount] = useState(0);
    let { name } = props;
    return (
        <div className="user-card m-4 p-4 border border-black border-solid">
            <h1>Count: {count}</h1>
            <button className="px-4 py-2 m-4 bg-green-200  rounded-lg"
                onClick={() => {
                    setCount(count - 1);
                }}>DECREMENT</button>
            <h2>Name: {name}</h2>
            <h3>Location: Berhampore, Murshidabad, West Bengal</h3>
            <h4>Contact: msdsubrata9@gmail.com</h4>
        </div>
    )
}

export default User;