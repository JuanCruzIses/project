import styles from "../styles/modules/index.module.css"

export default function Carousel(){
  
    return(
      <div id="carouselExampleCaptions" className={`carousel slide ${styles.containerFather}`} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={`carousel-inner ${styles.containerCardsCarousel}`}>
          <div className={`carousel-item active`}>
            <img src="/images/oficina.png" className="d-block w-100" alt="..."></img>
            <div className={styles.shadow}></div>
            <h5 className={styles.imgWord}>Calidad</h5>
            <div className={styles.complementoSlider}>
              <h5 className={styles.complementoSliderh5}>Calidad</h5>
              <p className={styles.complementoSliderP}>Estándares de calidad garantizados</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/living.png" className="d-block w-100" alt="..."></img>
            <div className={styles.shadow}></div>
            <h5 className={styles.imgWord}>Diseño</h5>
            <div className={styles.complementoSlider}>
              <h5 className={styles.complementoSliderh5}>Diseño</h5>
              <p className={styles.complementoSliderP}>Creaciones únicas que inspiran</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/jardin.png" className="d-block w-100" alt="..."></img>
            <div className={styles.shadow}></div>
            <h5 className={styles.imgWord}>Confort</h5>
            <div className={styles.complementoSlider}>
              <h5 className={styles.complementoSliderh5}>Confort</h5>
              <p className={styles.complementoSliderP}>Tu comodidad, nuestra prioridad</p>
            </div>
          </div>
        </div>
      </div>
    )
}
