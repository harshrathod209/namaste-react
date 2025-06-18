import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1>Namaste react 🚀</h1>

const HeadingComponent = () => (
    <div id="container">
        <TitleComponent />
        <h2 className="heading">Function composition</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);