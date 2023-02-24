import { useRouter } from "next/router";
import { useContext } from "react";
import Link from "next/link";
import NavItems from "./navItems";
// import AuthContext from "../../../context/auth";
import classes from "./header.module.css";

function Header() {
  // const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <header className={classes.header}>
      <NavItems />
    </header>
  )
}

export default Header;