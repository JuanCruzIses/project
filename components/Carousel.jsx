import styles from "../styles/modules/index.module.css"

export default function Carousel(){
    return(
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/oficina.png" className="d-block w-100" alt="..."></img>
            <div className={styles.shadow}></div>
            <h5 className={styles.imgWord}>Calidad</h5>
          </div>
          <div className="carousel-item">
            <img src="/images/living.png" className="d-block w-100" alt="..."></img>
            <div className={styles.shadow}></div>
            <h5 className={styles.imgWord}>Diseño</h5>
          </div>
          <div className="carousel-item">
            <img src="./images/jardin.png" className="d-block w-100" alt="..."></img>
            <div className={styles.shadow}></div>
            <h5 className={styles.imgWord}>Confort</h5>
          </div>
        </div>
        <button className={`carousel-control-prev ${styles.button}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`carousel-control-next ${styles.button}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
