import Footer from "./Footer"
import Navbar from "./Navbar"
import Tables from "./Tables"

const Layout = ({Children}) => {
  return (
    <>
        <Navbar/>
        {Children}
        <Footer/>
        <Tables/>
    </>
  )
}

export default Layout