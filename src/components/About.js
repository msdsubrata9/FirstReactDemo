import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <h2>We are a small start up of food ordering appliaction. Please visit our application and order delicious foods</h2>
            <User name={"Subrata Saha(Functinal Component)"} />

            <UserClass name={"Subrata Saha(Class Component)"} />
        </div>
    )
}

export default About;