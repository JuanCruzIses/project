import {BiLogoFacebookSquare, BiLogoInstagramAlt, BiSolidPhone} from "react-icons/bi"
import {MdEmail, MdLocationOn} from "react-icons/md"
import styles from "../styles/modules/footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.divFooter}>
                <h4 className={styles.titleFooter}>Contacto</h4>
                <p><BiSolidPhone/>1123883960</p>
                <p><MdEmail/>juancruzises@gmail.com</p>
                <p><MdLocationOn/>Senillosa 77, Caballito</p>
            </div>
            <div className={styles.divFooter}>
                <h4 className={styles.titleFooter}>Redes</h4>
                <button className={styles.buttonFooter}><BiLogoFacebookSquare/></button>
                <button className={styles.buttonFooter}><BiLogoInstagramAlt/></button>
            </div>
            <div className={styles.developedBy}>
                <p>Developed by</p>
                <img src="/images/logo512.png"></img>
            </div>
        </footer>
    )
}