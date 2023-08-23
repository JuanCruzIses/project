'use client'
/*EL LAYOUT SE IMPORTA EN OTRA PAGINA Y TOMA SU CONTENIDO COMO CHILDREN PARA PONERLO DENTRO DEL MAIN */
import styles from '../styles/modules/layout.module.css';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Footer from './Footer';

export default function Layout({ children }) {
  const [paso, setPaso] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', function () {
        let element = document.querySelector('#referenceToNav');
        let screenWidth = window.innerWidth;
        if(element != undefined){
          element.getBoundingClientRect().top <= 25 && screenWidth <= 768 ?
            setPaso(true)
            :
            setPaso(false)
        } 
      });
    }
  }, [])


  return (
    <div className={styles.firstContainer}>
      <header className={`${styles.header} ${paso == true && styles.containerOp}`}>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}