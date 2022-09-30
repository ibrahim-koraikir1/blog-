
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles.css'



function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
 
}

export default MyApp
