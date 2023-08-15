import Layout from "../../../components/Layout"
import Head from "next/head"
import Link from "next/link"
import styles from "../../../styles/modules/categories.module.css"
import stylesIndex from "../../../styles/modules/index.module.css"

import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Hogar(){
    const { data, error } = useSWR('../../../api/staticdata', fetcher);
    if (error) return(
        <Layout>
        <Head>
            <title>H - Hogar</title>
        </Head>
        <div>
            <p>Failed to load</p>
        </div>
    </Layout>    
    ) 
    
    return(
        <Layout>
            <Head>
            <title>H - Hogar</title>
            </Head>
            <div className={styles.containerMainImage}>
                <img src="/images/hogar.jpg" className="d-block w-100" alt="..."></img>
                <div className={styles.shadow}></div>
                <h5 className={styles.imgWord}>Hogar</h5>
            </div>
            <h2 className={stylesIndex.slogan}>Tu hogar, tu estilo, nuestros muebles</h2>
            
            <section className={styles.containerCardProduct}>
            {!data ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                    <p>Cargando tus productos...</p>
                </div>
            :

            JSON.parse(data).map(product=>
                product.categoria == "Hogar" &&
                <article key={`article-${product.nombreRuta}`} className={styles.cardProduct}>
                    <img src={`/images/${product.imagen1}`}></img>
                    <div className={styles.infoCardProduct}>
                    <p className={styles.nameProduct}>{product.nombre}</p>
                    <p>{product.detalle}</p>
                    </div>
                    <Link href={`/productos/${product.nombreRutaCategoria}/${product.nombreRuta}`}>Más informacion</Link>
                </article>
                )
            }
            </section>
        </Layout>
    )
}