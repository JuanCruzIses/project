import Layout from "../components/Layout"
import Head from "next/head"
import emailjs from '@emailjs/browser'
import styles from "../styles/modules/contacto.module.css"
import { Formik } from 'formik'
import React, { useState } from "react"
import Spinner from "../components/Spinner"

export default function Contacto(){
    const [error, setError] = useState(null)
    const [emailOk, setEmailOk] = useState(undefined)
    const [sendMensagge, useSendMensagge] =  useState(false)
    const sendEmail = async (event) => {
            useSendMensagge(true)
            emailjs.send("service_utumao9", "template_omm2cfe", {
                user_name: event.user_name,
                user_email: event.user_email,
                user_phone: event.user_phone,
                user_message: event.user_message,
            }, 'gK7ykd08ebiQM2bZT')
                .then(response => {
                    if (response.status == 200) {
                        setEmailOk(true)
                    }
                })
                .catch(error => setEmailOk(false))
        }

    
    return(
        <>
        <Layout>
            <Head>
            <title>H - Contacto</title>
            </Head>
            <main>
                <div className={styles.containerMainImage}>
                    <img src="/images/contacto.jpg" className="d-block w-100" alt="..."></img>
                    <div className={styles.shadow}></div>
                    <h5 className={styles.imgWord}>Contactanos</h5>
                </div>
                <p className={styles.msgForm}>Dejanos tu mensaje y te responderemos a la brevedad</p>
                <Formik initialValues={({
                user_name: '',
                user_email: '',
                user_phone: '',
                user_message: '',
            })}
                onSubmit={sendEmail}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                <form onSubmit={handleSubmit} className={styles.formContact}>
                    {error &&
                            <div className="container-errors">
                                <p>{error}</p>
                            </div>
                        }
                    <div className={styles.segmentForm}>
                        <label>Nombre y apellido</label>
                        <input 
                          required
                          type="text"
                          name='user_name'
                          values={values}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                    </div>
                    <div className={styles.segmentForm}>
                        <label>Email</label>
                        <input 
                        type="text"
                        required
                        name='user_email'
                        values={values}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div className={styles.segmentForm}>
                        <label>Telefono</label>
                        <input 
                        type="number"
                        required
                        name='user_phone'
                        values={values}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div className={styles.segmentForm}>
                        <label>Mensaje</label>
                        <textarea 
                        type="text"
                        values={values}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='user_message'
                        ></textarea>
                    </div>
                    {sendMensagge == false ? 
                        <button type="submit">Enviar</button>
                        :
                        emailOk == undefined ?
                            <Spinner/>
                            :
                            emailOk == true ? <p style={{margin: "auto"}}>¡El mensaje se envio correctamente!</p> : <p style={{margin: "auto"}}>El mensaje no pudo ser enviado, por favor, volve a intentarlo</p>
                    }
                </form>
                )}
                </Formik>
            </main>
        </Layout>
        </>
    )
}