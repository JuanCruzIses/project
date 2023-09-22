import Head from "next/head"
import styles from "../../../styles/modules/categories.module.css"
import stylesIndex from "../../../styles/modules/index.module.css"
import Link from "next/link"
import Layout from "../../../components/Layout"

import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Jardin(){
    const { data, error } = useSWR('/api/staticdata', fetcher);
    if (error) return(
    <Layout>
        <Head>
            <title>H - Jardín</title>
        </Head>
        <div>
            <p>Failed to load</p>
        </div>
    </Layout>    
    )
    
    if (!data) return(
    <Layout>
        <Head>
            <title>H - Jardín</title>
        </Head>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <p>Cargando tus productos...</p>
        </div>
    </Layout>
    ) 

    const dataParsed = JSON.parse(data)
    
    return(
        <Layout>
            <Head>
            <title>H - Jardín</title>
            </Head>
            <div className={styles.containerMainImage}>
                <img src="/images/foto5.jpg" className="d-block w-100" alt="..."></img>
                <div className={styles.shadow}></div>
                <h5 className={styles.imgWord}>Jardín</h5>
            </div>
            <h2 id="referenceToNav" className={stylesIndex.slogan}>Crea un paraíso al aire libre con nuestros muebles de jardín</h2>
            
            <section className={styles.containerCardProduct}>
                {/* <select className={styles.selectSC}>
                    <option value="">Exterior</option>
                    <option value="">Interior</option>
                </select> */}
                {dataParsed.map(product=>
                product.categoria == "Jardín" &&
                <article key={`article-${product.nombreRuta}`} className={styles.cardProduct}>
                    <img src={`/images/${product.imagen1}`}></img>
                    <div className={styles.infoCardProduct}>
                        <p className={styles.nameProduct}>{product.nombre}</p>
                        <p>{product.detalle}</p>
                    </div>
                    <Link href={`/productos/jardin/${product.nombreRuta}`}>Más informacion</Link>
                </article>
                )}
            </section>
        </Layout>
    )
}