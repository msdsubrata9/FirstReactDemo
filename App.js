import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <div>
        <h1 className="title">Namaste React using JSX</h1>
    </div>
)

const TitleComponent = () => (
    <div>
        <h1 className="title">Title Component using React For Assignment</h1>
    </div>
)

const HeadingComponent = () => (
    <div id="container">
        <Title />
        {<TitleComponent />}
        {<TitleComponent></TitleComponent>}
        <h1 className="heading">
            Namaste React Functional Component
        </h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);