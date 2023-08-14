'use client'

import stylesPD from "../styles/modules/productDetail.module.css"
import styles from "../styles/modules/CarouselInterestingProducts.module.css"
import Link from "next/link"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useState, useEffect } from "react"

export default function CarouselInterestingProducts(props) {
    let data = props.dataParsed
    const productDetailId = props.productDetailId
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function elimina(array, prodId) {
        return array.filter(prod => prod.id != prodId);
    }
    data = elimina(data, productDetailId)
    useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.innerWidth);
            window.innerWidth >= 700
        };
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className={`carousel-inner ${styles.containerCards}`}>
                {window.innerWidth >= 540 ?
                <>
                        {data.map((product, index) => index == 0 ?
                            <div className={`carousel-item active`} key={`${product.nombreRuta}-${index}`}>
                                <div className={styles.containerFlex}>
                                <Link href={`/productos/${data[index].nombreRutaCategoria}/${data[index].nombreRuta}`}>
                                    <div className={`card ${stylesPD.otherProductsCard}`}>
                                        <img className="d-block w-100" src={`/images/${data[index].imagen1}`}></img>
                                        <h5 className={stylesPD.cardTitle}>{data[index].nombre}</h5>
                                    </div>
                                </Link>
                                <Link href={`/productos/${data[index+1].nombreRutaCategoria}/${data[index+1].nombreRuta}`}>
                                    <div className={`card ${stylesPD.otherProductsCard}`}>
                                        <img className="d-block w-100" src={`/images/${data[index+1].imagen1}`}></img>
                                        <h5 className={stylesPD.cardTitle}>{data[index+1].nombre}</h5>
                                    </div>
                                </Link>
                                </div>
                            </div>
                            :
                            index != data.length-1 &&
                            <div className={`carousel-item ${styles.containerAnchorTags}`} key={`${product.nombreRuta}-${index}`}>
                                <div className={styles.containerFlex}>
                                <Link href={`/productos/${data[index].nombreRutaCategoria}/${data[index].nombreRuta}`}>
                                    <div className={`card ${stylesPD.otherProductsCard}`}>
                                        <img className="d-block w-100" src={`/images/${data[index].imagen1}`}></img>
                                        <h5 className={stylesPD.cardTitle}>{data[index].nombre}</h5>
                                    </div>
                                </Link>
                                <Link href={`/productos/${data[index+1].nombreRutaCategoria}/${data[index+1].nombreRuta}`}>
                                    <div className={`card ${stylesPD.otherProductsCard}`}>
                                        <img className="d-block w-100" src={`/images/${data[index+1].imagen1}`}></img>
                                        <h5 className={stylesPD.cardTitle}>{data[index+1].nombre}</h5>
                                    </div>
                                </Link>
                                </div>
                            </div>                            
                        )}
                        </>
                    :
                    <>
                        {data.map((product, index) => index == 0 ?
                            <Link className="carousel-item active" key={product.nombreRuta} href={`/productos/${product.nombreRutaCategoria}/${product.nombreRuta}`}>
                                <div className={`card ${stylesPD.otherProductsCard}`}>
                                    <img className="d-block w-100" src={`/images/${product.imagen1}`}></img>
                                    <h5 className={stylesPD.cardTitle}>{product.nombre}</h5>
                                </div>
                            </Link>
                            :
                            <Link className="carousel-item" key={product.nombreRuta} href={`/productos/${product.nombreRutaCategoria}/${product.nombreRuta}`}>
                                <div className={`card ${stylesPD.otherProductsCard}`}>
                                    <img className="d-block w-100" src={`/images/${product.imagen1}`}></img>
                                    <h5 className={stylesPD.cardTitle}>{product.nombre}</h5>
                                </div>
                            </Link>
                        )}
                    </>
                }
            </div>
            <button className={`${styles.prevProduct} ${styles.button}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <IoIosArrowBack />
            </button>
            <button className={`${styles.nextProduct}  ${styles.button}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <IoIosArrowForward />
            </button>
        </div>

    )
}
