import React, { Component } from "react";

class notFound extends Component {
  render() {
    return (
      <div>
        <h1>ERROR 404</h1>
        <button onClick={() => window.history.back()}>go back</button>
      </div>
    );
  }
}
export default notFound;
