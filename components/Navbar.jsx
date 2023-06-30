import Link from "next/link"
import styles from '../styles/modules/header.module.css'
import { useState } from "react"
import {FaHome} from "react-icons/fa"
import {IoMdMail} from "react-icons/io"
import {PiPottedPlantFill, PiOfficeChairFill} from "react-icons/pi"

export default function Navbar(){
    const [pClicked, setpClicked] = useState(false)
    const clickp = ()=>{
        setpClicked(!pClicked)
    }
    return(
        <div className={styles.containerNavbar}>
            <Link href="/">
                <img className='logo-img' src="/images/logo.png"></img>
            </Link>
            <nav className={`navbar navbar-dark bg-dark ${styles.navbarSection}`}>
                <div className={styles.containerFluid}>
                    <p onClick={clickp} className={`navbar-toggler ${styles.navbarTogglerButton}`} type="p" >
                    <span className='navbar-toggler-icon'></span>
                    </p>
                </div>
                <div  className={!pClicked ? styles.collapsable : styles.collapsableTrue} >
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href='/productos/hogar'>
                            <FaHome/>
                            Hogar
                        </Link>
                    </p>
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href='/productos/jardin'>
                            <PiPottedPlantFill/>
                            Jardin
                        </Link>
                    </p>
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href='/productos/oficina'>
                            <PiOfficeChairFill/>
                            Oficina
                        </Link>
                    </p>
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href='/contacto'>
                            <IoMdMail/>
                            Contacto
                        </Link>
                    </p>
                </div>
            </nav>
        </div>
    )
}