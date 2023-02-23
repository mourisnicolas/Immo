import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // useEffect(() => check(), []);

  // register user
  async function register(data) {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/register`, data);
      setUser(res.data);
      router.replace('/dash');
    } catch(err) {
      console.log(err.response.data);
    }
  }

  // login user
  async function login(data) {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, data);
      setUser(res.data);
      router.replace('/dash');
    } catch(err) {
      console.alert(err.response.data);
    }
  }

  // logout user
  async function logout() {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/logout`);
      setUser(null);
      router.replace('/');
    } catch {
      return;
    }
  }

  // check if user is logged in
  async function check() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user`);
      setUser(res.data);
    } catch {
      return;
    }
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;