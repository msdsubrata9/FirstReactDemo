import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Bhujun Bhajun",
                location: "Bhulbhal Para",
            },
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/msdsubrata9");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, avatar_url, bio } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Bio: {bio}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: msdsubrata9@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;