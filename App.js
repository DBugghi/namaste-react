import React from "react";
import ReactDOM from "react-dom";

//React Elements
//React.creatElement =>  Object => Render => HTMLElement

//const heading = React.createElement("h1",{id:"heading"},"Namaste React")

//JSX => React.createElement => Object => HTMLElement (Transpiled before JS Engine)
//const heading = <h1 className="heading">Namaste React using JSX</h1>;

//React Components Types =>
//Class Based Components - Old Way - Nobody uses
//Functional Components - New Way - Modern

//Functional Component

const Title = () => (
    <div className="head" tabIndex="5">
        Namaste React Title
    </div>
)

const num = 1000;

//Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        {num}
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
