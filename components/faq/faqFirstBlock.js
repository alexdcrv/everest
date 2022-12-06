import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/pages/faq.module.css'
// import ReactGA from 'react-ga4';
import * as gtag from '../../lib/gtag'
const FaqFirst =()=>{
    const [sliderStatus, setSliderStatus] = useState (1)
    const router = useRouter()
    const linkTo =(point)=>{
        if(point==="links"){
            gtag.event ({
                category:'Кнопка редиректа на покупки (с сайта/ozon)',
                action:`Кнопка ЗАКАЗАТЬ со страницы FAQ`,
            })
        }
        router.push(`../${point}`)
    }
    return (
            <section className={styles.faq__first__block}>
                    <img alt='left' src='/left.png'
                        onClick={()=>{
                        if(sliderStatus!=1)
                            {setSliderStatus(sliderStatus-1)}            
                        }}
                        style={{opacity:sliderStatus===1?0:1,transition: '500ms ease opacity',
                            cursor:sliderStatus===1?'default':'pointer'
                        }}/>
                    <div className={styles.faq__first__container}>
                        
                         <div className={styles.faq__first__slider}
                            style={{
                                transform:`translateX(${sliderStatus===1?
                                '0vw':sliderStatus===2?'-35vw':'-70vw'})`}}
                            >
                            <img alt='puzzle1' className={styles.faq__first__img}
                                style={{
                                    opacity:sliderStatus===1?1:0,
                                   
                                }}
                                src='/puzzle-faq.jpg'/>
                            <img alt='puzzle2' className={styles.faq__first__img}
                                style={{
                                    opacity:sliderStatus===2?1:0,
                                    
                                }}
                                src='/puzzle-faq2.jpg'/>
                            <img alt='puzzle3' className={styles.faq__first__img} 
                                style={{opacity:sliderStatus===3?1:0}}
                                src='/puzzle-faq3.jpg'/>
                        </div>
                
                    </div>
                    <img alt='right' src='/right.png' 
                    onClick={()=>{
                    if(sliderStatus<3)
                        {setSliderStatus(sliderStatus+1)}            
                    }}
                    style={{opacity:sliderStatus===3?0:1,
                        transition: '500ms ease all',
                        cursor:sliderStatus===3?'default':'pointer'}}
                    />
               
                <div className={styles.faq__first__text}>
                    <p className={styles.faq__first__title}>Собери пазл, чтобы получить шанс выиграть миллион рублей!</p>
                    <li className={styles.faq__first__li}>Количество элементов: 256</li>
                    <li className={styles.faq__first__li}>Размер: 30х30</li>
                    <li className={styles.faq__first__li}>Стоимость: 1470 рублей</li>
                    <div  onClick={()=>linkTo('links')} ><button className={styles.faq__first__buy}>ЗАКАЗАТЬ</button></div>
                </div>
            </section>
    )
}
export default FaqFirst