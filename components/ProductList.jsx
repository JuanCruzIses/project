import styles from "../styles/modules/index.module.css"

export default function ProductList(){
    return(
        <div className={styles.productList}>
            <h3>Los más pedidos</h3>
            <div className={styles.containerListItems}>
                <div class="card">
                    <img src="/images/mueble1.png" class="card-img-top" alt="..."></img>
                    <h5 className={styles.cardTitle}>Mueble 1</h5>                
                </div>
                <div className="card">
                    <img src="/images/mueble2.png" class="card-img-top" alt="..."></img>
                    <h5 className={styles.cardTitle}>Mueble 2</h5>                
                </div>
                <div class="card">
                    <img src="/images/mueble3.png" class="card-img-top" alt="..."></img>
                    <h5 className={styles.cardTitle}>Mueble 3</h5>                
                </div>
                <div class="card">
                    <img src="/images/mueble4.png" class="card-img-top" alt="..."></img>
                    <h5 className={styles.cardTitle}>Mueble 4</h5>                
                </div>
                <div class="card">
                    <img src="/images/mueble5.png" class="card-img-top" alt="..."></img>
                    <h5 className={styles.cardTitle}>Mueble 5</h5>                
                </div>
                <div class="card">
                    <img src="/images/mueble6.png" class="card-img-top" alt="..."></img>
                    <h5 className={styles.cardTitle}>Mueble 6</h5>                
                </div>
            </div>
                <h2 className={styles.secondSlogan}>Innova tu entorno con muebles que marcan la diferencia</h2>
        </div>
    )
}