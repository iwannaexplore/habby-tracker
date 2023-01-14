import React from 'react';
import {GLOBAL_CONST} from "../global";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Create your {GLOBAL_CONST.appName} account</h3>
      <label htmlFor="email">
        <input type="email" id="email"/>
      </label>
      <label htmlFor="password">
        <input type="password" id="password"/>
      </label>
      <button>Create account</button>
    </div>);
}

export default Login;