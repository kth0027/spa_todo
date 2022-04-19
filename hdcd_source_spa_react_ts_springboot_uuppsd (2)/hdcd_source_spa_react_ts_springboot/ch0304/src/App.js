import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      userName: "Alex",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  handleClickTyler = () => {
    console.log("handleClickTyler");

    this.setState({ userName: "Tyler" });
  };

  handleClickJulian = () => {
    console.log("handleClickJulian");

    this.setState({ userName: "Julian" });
  };

  render() {
    const { userName } = this.state;
    return (
      <div>
        <h1>Hello {userName}!</h1>;
        <button onClick={this.handleClickTyler}>Tyler</button>
        <button onClick={this.handleClickJulian}>Julian</button>
      </div>
    );
  }
}

export default App;
