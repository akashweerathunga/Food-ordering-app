import Footer from "./Footer"
import Navbar from "./Navbar"
import Tables from "./Tables"
import Payment from "./Payment"

const Layout = ({Children}) => {
  return (
    <>
        <Navbar/>
        {/* <Tables/> */}
        <Payment/>
        {Children}
        
        <Footer/>
        
    </>
  )
}

export default Layout