import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={errorStyle}>
          <h1>Something went wrong...</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

const errorStyle = {
  width: "100%",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
