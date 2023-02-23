import Header from "../header";
import Footer from "../footer";
import classes from "./layout.module.css";

function Layout({ children }) {

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout;