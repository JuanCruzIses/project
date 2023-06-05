/*EL LAYOUT SE IMPORTA EN OTRA PAGINA Y TOMA SU CONTENIDO COMO CHILDREN PARA PONERLO DENTRO DEL MAIN */

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/modules/layout.module.css';
import utilStyles from '../styles/modules/utils.module.css';
import Link from 'next/link';


export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name=""
          content=""
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
          <nav>
            <h2>Este es el navbar</h2>
          </nav>
      </header>
      
      <main>
        {children}
      </main>
    
      <footer>
        <h3>Este es el foter</h3>
      </footer>
    </div>
  );
}