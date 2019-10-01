import React, { Component } from "react";
import * as firebase from "firebase/app";

// import "firebase/auth";
// const { params } = this.props.match;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }
  componentDidMount() {
    // var user = firebase.auth().currentUser;
    // this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return <div>{user || "log in"}</div>;
  }
}
export default Profile;
