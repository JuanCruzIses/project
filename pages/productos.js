import Layout from "../components/Layout"
import styles from "../styles/modules/index.module.css"

export default function Home() {
  return (
    <Layout>
      <main>
        <Carousel/>
        <h2 className={styles.slogan}>Crea tu espacio perfecto con estilo y comodidad</h2>
        <ProductList/>
      </main>
    </Layout>
  )
}
