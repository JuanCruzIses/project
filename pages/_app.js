/* PARA DAR ESTILOS DE FORMA GLOBAL A TODAS LAS PAGINAS */
// import '../styles/globals/css';
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {  
  return(  
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />

    <Component {...pageProps} />
  </>
  )
  }


  