import Footer from "../components/footer"
import styles from '../styles/pages/main.module.css'
import Banner from "../components/main/banner"

import Head from "next/head"

import { useEffect, useState } from "react"
import Gallery from "../components/main/gallery"
import Improvement from "../components/main/improvement"
import Building from "../components/main/building"
import Phone from "../components/main/phone"


const Main =()=>{
    const [fontsLoaded,setFontsLoaded] = useState(false)


    useEffect(()=>{
        
        document.fonts.onloadingdone  = () => {
            setFontsLoaded(true)

        
          };
        document.fonts.ready.then(function () {
            setFontsLoaded(true)
   
        });
          
          return function cleanup() {}
    },[])
    return (
        <>
            <Head>
                <title>SK EVEREST</title>
                <meta name="description" content=" Собери пазл чтобы получать шанс выиграть миллион рублей! MILLION PUZZLE"></meta>
                <link rel="icon" href="/favicon.ico" />
                <meta name="yandex-verification" content="d8c66ebc36898fea" />
                <meta name="facebook-domain-verification" content="hn4vu2dxi6tshy98imd2lf7x2o5mhj" />
                <meta name="keywords" content="строительная компиния, строительная фирма"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0," />
                <meta name="HandheldFriendly" content="true" />
                
            </Head>
            <div className={styles.main}>
                <Banner/>
                <Gallery/>
                <Improvement/>
                <Building/>
                <Phone/>
            </div>
        </>
    )
}
export default Main