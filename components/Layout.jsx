/*EL LAYOUT SE IMPORTA EN OTRA PAGINA Y TOMA SU CONTENIDO COMO CHILDREN PARA PONERLO DENTRO DEL MAIN */

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/modules/layout.module.css';
import utilStyles from '../styles/modules/utils.module.css';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

export const siteTitle = 'Next.js Sample Website';


export default function Layout({ children, home }) {
  return (
    <div className={styles.firstContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name=""
          content=""
        />
        <meta name="og:title" content={siteTitle} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>
      <header className={styles.header}>
            <Navbar/>
      </header>
      
      <main>
        {children}
      </main>
    
      <Footer/>
    </div>
  );
}