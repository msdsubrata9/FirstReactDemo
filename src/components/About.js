import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="m-4 p-4">
            <h1 className="text-2xl font-bold">About Us Page</h1>
            <h2 className="text-2xl font-bold">We are a small start up of food ordering appliaction. Please visit our application and order delicious foods</h2>
            <User name={"Subrata Saha(Functinal Component)"} />

            <UserClass name={"Subrata Saha(Class Component)"} />
        </div>
    )
}

export default About;