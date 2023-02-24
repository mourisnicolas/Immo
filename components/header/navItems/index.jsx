import Link from "next/link";
import classes from "./navItems.module.css";

function NavItems({ path, auth, logout }) {

  function renderData() {
    if(auth) {

    } else {
      return <>
        <Link href="https://www.immobilienscout24.de/">
          <img src="/immo24.svg" className={classes.navIcon} />
        </Link>

        <span className={classes.navInfo}>
          <span className={classes.span}>Der Marktführer:</span>
          <span className={classes.span}>Die Nr. 1 rund um Immobilien</span>
        </span>
      </>
    }
  }

  return <nav className={classes.nav}>{renderData()}</nav>
}

export default NavItems;