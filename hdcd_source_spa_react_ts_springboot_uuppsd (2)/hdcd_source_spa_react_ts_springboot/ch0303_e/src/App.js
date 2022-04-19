import React, { Component } from "react";
import "./App.css";

class App extends Component {
  userName = "Alex";

  handleClickTyler = () => {
    console.log("handleClickTyler");

    this.userName = "Tyler";
    this.forceUpdate();
  };

  handleClickJulian = () => {
    console.log("handleClickJulian");

    this.userName = "Julian";
  };

  render() {
    return (
      <div>
        <h1>Hello {this.userName}!</h1>
        <button onClick={this.handleClickTyler}>Tyler</button>
        <button onClick={this.handleClickJulian}>Julian</button>
      </div>
    );
  }
}

export default App;
