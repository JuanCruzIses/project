import Link from "next/link"
import styles from '../styles/modules/header.module.css'
import { useState } from "react"
import {FaHome} from "react-icons/fa"
import {PiPottedPlantFill, PiOfficeChairFill} from "react-icons/pi"

export default function Navbar(){
    const [pClicked, setpClicked] = useState(false)
    const clickp = ()=>{
        setpClicked(!pClicked)
    }
    return(
        <div className={styles.containerNavbar}>
            <img className='logo-img' src="/images/logo.png"></img>
            <nav class="navbar navbar-dark bg-dark">
                <div className={styles.containerFluid}>
                    <p onClick={clickp} class="navbar-toggler" type="p" >
                    <span class="navbar-toggler-icon"></span>
                    </p>
                </div>
                <div  className={!pClicked ? styles.collapsable : styles.collapsableTrue} >
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href={''}>
                            <FaHome/>
                            Hogar
                        </Link>
                    </p>
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href={''}>
                            <PiPottedPlantFill/>
                            Jardin
                        </Link>
                    </p>
                    <p className={styles.PnavbarOption}>
                        <Link className={styles.navbarOption} href={''}>
                            <PiOfficeChairFill/>
                            Oficina
                        </Link>
                    </p>
                </div>
            </nav>
        </div>
    )
}