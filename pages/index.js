import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import ProductList from "../components/ProductList"
import styles from "../styles/modules/index.module.css"

export default function Home() {
  return (
    <Layout>
        <Carousel/>
        <h2 className={styles.slogan}>Crea tu espacio perfecto con estilo y comodidad</h2>
        <ProductList/>
    </Layout>
  )
}