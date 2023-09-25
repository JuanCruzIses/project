import styles from "../styles/modules/productDetail.module.css"


export default function Carousel(props){
    const productDetail = props.productDetail
    
    return(
    <div id="carouselExampleAutoplaying" className={`carousel slide ${styles.carousel50}`} data-bs-ride="carousel" data-interval="100">
        <div className={`carousel-inner ${styles.containerImagePD}`}>
            <div className="carousel-item active">
                <img src={`/images/${productDetail.imagen1}`} className="d-block w-100" alt="..."></img>
                <div className={styles.shadow}></div>
            </div>
            {productDetail.imagen2 != undefined && 
                <div className="carousel-item">
                    <img src={`/images/${productDetail.imagen2}`} className="d-block w-100" alt="..."></img>
                    <div className={styles.shadow}></div>
                </div>
            }
            {productDetail.imagen3 != undefined && 
                <div className="carousel-item">
                    <img src={`/images/${productDetail.imagen3}`} className="d-block w-100" alt="..."></img>
                    <div className={styles.shadow}></div>
                </div>
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div> 
    )
}
