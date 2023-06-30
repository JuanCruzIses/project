import Layout from "../components/Layout"
import Head from "next/head"
// import stylesIndex from "../styles/modules/index.module.css"
import styles from "../styles/modules/contacto.module.css"


export default function Jardin(){
    return(
        <>
        <Layout>
            <Head>
            <title>H - Contacto</title>
            </Head>
            <div>
                <div className={styles.containerMainImage}>
                    <img src="/images/contactoBanner.png" className="d-block w-100" alt="..."></img>
                    <div className={styles.shadow}></div>
                    <h5 className={styles.imgWord}>Contactanos</h5>
                </div>
                <form className={styles.formContact}>
                    <p className={styles.msgForm}>Dejanos tu mensaje y te responderemos a la brevedad</p>
                    <div className={styles.segmentForm}>
                        <label>Nombre y apellido</label>
                        <input type="text" required></input>
                    </div>
                    <div className={styles.segmentForm}>
                        <label>Email</label>
                        <input type="text" required></input>
                    </div>
                    <div className={styles.segmentForm}>
                        <label>Telefono</label>
                        <input type="number" required></input>
                    </div>
                    <div className={styles.segmentForm}>
                        <label>Mensaje</label>
                        <textarea required></textarea>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </Layout>
        </>
    )
}