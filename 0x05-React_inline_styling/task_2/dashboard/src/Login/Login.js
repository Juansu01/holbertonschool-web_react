import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.login)}>
        <p>
          Login to access to the full dashboard
        </p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
        <button>OK</button>
      </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
  },
});

export default Login;