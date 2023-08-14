import Link from "next/link"
import styles from "../styles/modules/index.module.css"

import useSWR from 'swr';
import Spinner from "./Spinner";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList(){

const { data, error } = useSWR('/api/staticdata', fetcher);  
if (error) return(
   <div>
        <h3>Lo sentimos, no pudimos cargar los productos</h3>
   </div>
)

if (!data) return(
    <div>
        <Spinner/>
    </div>
) 
    
const dataParsed = JSON.parse(data)  

return(
    <div className={styles.productList}>
        <h3>Los más pedidos</h3>
        <div className={styles.containerListItems}>
            {dataParsed.map(product => product &&
            <Link key={product.nombreRuta} href={`/productos/${product.nombreRutaCategoria}/${product.nombreRuta}`}>
                <div className={`card ${styles.card}`}>
                    <div className={styles.containerImageSpan}>
                        <img src={`/images/${product.imagen1}`} className="card-img-top" alt="..."></img>
                        <span className={styles.spanShadow}></span>
                        <span className={styles.priceSpan}>${product.precio}</span>
                    </div>
                    <h5 className={styles.cardTitle}>
                        {product.nombre}      
                    </h5>                  
                </div>
            </Link>
            )}    
        </div>
            <h2 className={styles.secondSlogan}>Innova tu entorno con muebles que marcan la diferencia</h2>
    </div>
)
}