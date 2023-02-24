import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth";
import axios from "axios";
import styles from "./admin.module.css";

function Admin() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const { register, login, error, setError } = useContext(AuthContext);

  const handleChange = e => setUser(prev => ({...prev, [e.target.name]: e.target.value}));

  function handleCreate() {
    register({
      username: "admin",
      password: "admin"
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleCreate}>create admin</button>
    <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          className={styles.form__input}
          name="username"
          type="text"
          required
          autoFocus
          placeholder="username"
          autoComplete="username"
          value={user.username}
          onChange={handleChange}
        />        
        
        <input 
          className={styles.form__input}
          name="password"
          type="password"
          required
          placeholder="password"
          autoComplete="current-password"
          value={user.password}
          onChange={handleChange}
        />

        <button>Log In</button>
    </form>
    </div>
  )
}

export default Admin;