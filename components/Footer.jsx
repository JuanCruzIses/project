import Link from "next/link"
import {BiLogoFacebookSquare, BiLogoInstagramAlt, BiSolidPhone} from "react-icons/bi"
import {MdEmail, MdLocationOn} from "react-icons/md"
import styles from "../styles/modules/footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.divFooter}>
                <h4 className={styles.titleFooter}>Contacto</h4>
                <p><BiSolidPhone/>1151345143</p>
                <p><MdEmail/>info.toutenun@gmail.com</p>
                <p><MdLocationOn/>Nueva Pompeya, CABA</p>
            </div>
            <div className={styles.divFooter}>
                <h4 className={styles.titleFooter}>Redes</h4>
                <Link legacyBehavior href="https://www.facebook.com/toutenunAR/videos/macetas-tout/928904143951441/">
                    <a target="_blank">    
                        <button className={styles.buttonFooter}><BiLogoFacebookSquare/></button>
                    </a>
                </Link>
                <Link legacyBehavior href="https://www.instagram.com/toutenun_macetas/" target="_blank">
                    <a target="_blank">    
                        <button className={styles.buttonFooter}><BiLogoInstagramAlt/></button>
                    </a>
                </Link>
            </div>
            <div className={styles.developedBy}>
                <Link legacyBehavior href="https://juancruzises-portfolio.vercel.app/">
                    <a className={styles.anchorLogo} target="_blank">
                        Developed by
                        <img src="/images/logo512.png"></img>
                    </a>
                </Link>
            </div>
        </footer>
    )
}