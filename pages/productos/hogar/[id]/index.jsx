import Layout from '../../../../components/Layout';
import {useRouter} from 'next/router'
import CarouselProductDetail from '../../../../components/CarouselProductDetail'
import Head from 'next/head';
import {MdKeyboardArrowLeft, MdWhatsapp} from 'react-icons/md'
import Link from 'next/link';
import styles from "../../../../styles/modules/productDetail.module.css"
import "../../../../api"
import useSWR from 'swr';
import CarouselInterestingProducts from '../../../../components/CarouselInterestingProducts';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail({}) {
  const router = useRouter()
  const id = router.query.id
  const { data, error } = useSWR('../../../../api/staticdata', fetcher);
  
  if (error) return(
  <Layout>
      <Head>
          <title>H - Detalle de producto</title>
      </Head>
      <div>
          <p>Failed to load</p>
      </div>
  </Layout>    
  )
  
  if (!data) return(
    <Layout>
        <Head>
            <title>H - Jardín</title>
        </Head>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
        </div>
    </Layout>
    ) 

    const dataParsed = JSON.parse(data)
    const productDetail = dataParsed.find(product => product.nombreRuta == id)
  
    return(
      <Layout>
        {productDetail ? 
        <>
        <div className={styles.navbarDetailPage}>
          <Link href={`/productos/${productDetail.nombreRutaCategoria}`}><MdKeyboardArrowLeft/></Link>
          <p>{productDetail.categoria}</p>
        </div>
          <CarouselProductDetail productId={'productDetail'} productDetail={productDetail}/>
          <div className={styles.containerInfo}>
            <h1 className={styles.nameProduct}>{productDetail.nombre}</h1>
            <div className={styles.measureContainer}>
              <p >{productDetail.detalle}</p>
              <p>${productDetail.precio}</p>
              <div className={styles.descriptionProduct}>
                <p>{productDetail.descripcion}</p>
              </div>
              <p className={styles.productRequestText}>Realizamos a pedido (demora de hasta 10 dias)</p>
            </div>
          <Link legacyBehavior className={styles.whatsAppLink} href="https://wa.link/xp0la4">
            <a className={styles.whatsAppLink} target="_blank">
              <span>¡Hacenos tu consulta!</span><MdWhatsapp/>
            </a>    
          </Link>
          </div>
          <div className={styles.otherProductsContainerCards}>
            <p>Productos que te podrian interesar</p>
            <div className={styles.containerSlideOtherProductsCards}>
              <CarouselInterestingProducts productDetailId={productDetail.id} dataParsed={dataParsed}/>
            </div>
          </div>
        </>
        :
        <p>Cargando tus productos...</p>
        }
      </Layout>)
}

