import React, { Component } from "react";
import "./index.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>
          This React project just works including{" "}
          <span className="redBg">module</span> local styles.
        </p>
        <p>Enjoy!</p>
      </div>
    );
  }
}
