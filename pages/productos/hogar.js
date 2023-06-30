import Layout from "../../components/Layout"
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/modules/categories.module.css"
import stylesIndex from "../../styles/modules/index.module.css"

export default function Hogar(){
    return(
        <>
        <Layout>
            <Head>
            <title>H - Hogar</title>
            </Head>
            <div className={styles.containerMainImage}>
                <img src="/images/living.png" className="d-block w-100" alt="..."></img>
                <div className={stylesIndex.shadow}></div>
                <h5 className={stylesIndex.imgWord}>Hogar</h5>
            </div>
            <h2 className={stylesIndex.slogan}>Tu hogar, tu estilo, nuestros muebles</h2>
            
            <section className={styles.containerCardProduct}>
                <article className={styles.cardProduct}>
                    <img src="/images/mueble1.png"></img>
                    <div className={styles.infoCardProduct}>
                        <p className={styles.nameProduct}>Mesa moderna</p>
                        <span>|</span>
                        <p>Breve descripcion</p>
                    </div>
                    <button>Más informacion</button>
                </article>

                <article className={styles.cardProduct}>
                    <img src="/images/mueble3.png"></img>
                    <div className={styles.infoCardProduct}>
                        <p className={styles.nameProduct}>Alacena baja</p>
                        <span>|</span>
                        <p>Breve descripcion</p>
                    </div>
                    <button>Más informacion</button>
                </article>
                <article className={styles.cardProduct}>
                    <img src="/images/mueble5.png"></img>
                    <div className={styles.infoCardProduct}>
                        <p className={styles.nameProduct}>Mesa ratona moderna</p>
                        <span>|</span>
                        <p>Breve descripcion</p>
                    </div>
                    <button>Más informacion</button>
                </article>
            </section>
        </Layout>
        </>
    )
}