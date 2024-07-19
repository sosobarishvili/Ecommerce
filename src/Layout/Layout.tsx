import Footer from "../Components/Footer.tsx/Footer"
import Header from "../Components/Header.tsx/Header"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"
import Router from "../Router/Router"

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Router />
      <Footer />
    </>
  )
}

export default Layout