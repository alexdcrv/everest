
import styles from '../styles/pages/main.module.css'
import Banner from "../components/main/banner"

import Head from "next/head"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react"
import Gallery from "../components/main/gallery"
import Improvement from "../components/main/improvement"
import Building from "../components/main/building"
import Phone from "../components/main/phone"
import MobBanner from '../components/main/mobBanner';


const Main =()=>{
    const improvement = useRef(null);
    const contacts = useRef(null);
    return (
        <>
            <Head>
                <title>SK EVEREST</title>
                <meta name="description" content="Строительно-монтажные работы в Крыму"></meta>
                <link rel="icon" href="/favicon.ico" />
                <meta name="yandex-verification" content="d8c66ebc36898fea" />
                <meta name="facebook-domain-verification" content="hn4vu2dxi6tshy98imd2lf7x2o5mhj" />
                <meta name="keywords" content="строительная компания, строительная фирма"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0," />
                <meta name="HandheldFriendly" content="true" />
                
            </Head>
            <div className={styles.main}>
                <MobBanner improvement={improvement} contacts={contacts}/>
                <Banner improvement={improvement} contacts={contacts}/>
                <Gallery/>
                <div ref={improvement}>
                    <Improvement/>
                    <Building/>
                </div>
                
                <div ref={contacts}>
                    <Phone/>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default Main