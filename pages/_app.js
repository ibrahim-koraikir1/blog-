
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles.css'



function MyApp({ Component, pageProps }) {
  return <div className='max-contener'>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>
 
}

export default MyApp
