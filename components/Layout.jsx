/*EL LAYOUT SE IMPORTA EN OTRA PAGINA Y TOMA SU CONTENIDO COMO CHILDREN PARA PONERLO DENTRO DEL MAIN */
import styles from '../styles/modules/layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className={styles.firstContainer}>
      <header className={styles.header}>
          <Navbar/>
      </header>
      {children}
      <Footer/>
    </div>
  );
}