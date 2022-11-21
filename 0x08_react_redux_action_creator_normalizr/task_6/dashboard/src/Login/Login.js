import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.logIn(email, password);
  }

  handleEmailUpdate(e) {
    const { value } = e.target;
    const { password } = this.state;

    if (value !== "" && password !== "")
    {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
    this.setState({ email: e.target.value });
  }

  handlePasswordUpdate(e) {
    const { value } = e.target;
    const { email } = this.state;

    if (email !== "" && value !== "") {
      this.setState({ enableSubmit: true })
    } else {
      this.setState({ enableSubmit: false })
    }
    this.setState({ password: e.target.value });
  }

  render () {
    return (
      <div className={css(styles.login)}>
          <p>
            Login to access to the full dashboard
          </p>
          <form action="" onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={css(styles.loginInput)}
              value={this.state.email}
              onChange={this.handleEmailUpdate}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={css(styles.loginInput)}
              value={this.state.password}
              onChange={this.handlePasswordUpdate}
            />
            <input type="submit" disabled={!this.state.enableSubmit}/>
          </form>
        </div>
    );
  }
}

const mediaQuery = {
  small: "@media screen and (max-width: 900px)",
}

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [mediaQuery.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    }
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [mediaQuery.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    }
  }
});

export default Login;