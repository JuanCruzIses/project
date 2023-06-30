/*EL LAYOUT SE IMPORTA EN OTRA PAGINA Y TOMA SU CONTENIDO COMO CHILDREN PARA PONERLO DENTRO DEL MAIN */

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/modules/layout.module.css';
import utilStyles from '../styles/modules/utils.module.css';
import Link from 'next/link';
import Script from "next/script"
import Navbar from './Navbar';
import Footer from './Footer';



export default function Layout({ children, home }) {
  return (
    <div className={styles.firstContainer}>
      <Head>
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