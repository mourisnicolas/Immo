import Link from "next/link";
import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link className={classes.containerLink} href="https://www.immobilienscout24.de/kontakt/s/">Kontakt & Hilfe</Link>|
        <Link className={classes.containerLink} href="https://www.immobilienscout24.de/impressum.html">Impressum</Link>|
        <Link className={classes.containerLink} href="https://www.immobilienscout24.de/agb.html">AGB & Rechtliche Hinweise</Link>|
        <Link className={classes.containerLink} href="https://www.immobilienscout24.de/agb/verbraucherinformationen.html">Verbraucherinformationen</Link>|
      </div>      
      <div className={`${classes.container} ${classes.bottom}`}>
        <Link className={classes.containerLink} href="https://www.immobilienscout24.de/agb/datenschutz.html">Datenschutz</Link>|
        <Link className={classes.containerLink} href="/">Zum Privacy Manager</Link>|
        <Link className={classes.containerLink} href="https://sicherheit.immobilienscout24.de/">Sicherheit</Link>
      </div>
      <span className={classes.containerBtn}>© Copyright 1999 - 2023 Immobilien Scout GmbH</span>
    </footer>
  )
}

export default Footer;