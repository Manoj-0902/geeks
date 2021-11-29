import React, { Component } from "react";
import SignIn from "./components/SignIn";
import "./App.css";
import Menu from "./components/menu";
import { Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    users: {},
    isLoggedIn: false,
    currentUsername: "",
    currentPassword: "",
    currentEmail: "",
    currentPhone: "",
    currentProfession: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handeChangeLogin = () => {
    //change to login
  };

  handleSignup = () => {
    //sign up logic
    //show signup success and change to login
    const {
      currentUsername,
      currentPassword,
      currentEmail,
      currentPhone,
      currentProfession,
    } = this.state;
    const modifiedUsers = { ...this.state.users };
    modifiedUsers[currentUsername] = {
      currentUsername,
      currentPassword,
      currentEmail,
      currentPhone,
      currentProfession,
    };
    this.setState({ users: modifiedUsers });
    alert("Registration successful");
  };

  handleCompanyInfo = () => {};

  render() {
    const {
      currentPassword,
      currentUsername,
      currentEmail,
      currentPhone,
      isLoggedIn,
    } = this.state;
    return (
      <div className="app">
        <Menu
          onHandleCompanyInfo={this.handleCompanyInfo}
          isLoggedIn={isLoggedIn}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            <SignIn
              username={currentUsername}
              password={currentPassword}
              email={currentEmail}
              phone={currentPhone}
              onHandleChange={this.handleChange}
              onHandleLogin={this.handeChangeLogin}
              onHandleSignUp={this.handleSignup}
            />
          )}
        />
        <h1>Namma Movies</h1>
      </div>
    );
  }
}

export default App;
