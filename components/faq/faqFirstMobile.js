import { useState } from 'react'
import styles from '../../styles/pages/faqMob.module.css'

const FaqFirstMobile =()=>{
    const [sliderStatus, setSliderStatus] = useState (1)
    return (
        <section>
            <p className={styles.faq__first__title}>{'Собери пазл, чтобы получить шанс выиграть миллион рублей!'.toUpperCase()}</p>
            <div className={styles.faq__mob__block}>
                    
                    <div className={styles.faq__first__container}>
                        
                         <div className={styles.faq__first__slider}
                            style={{
                                transform:`translateX(${sliderStatus===1?
                                '0vw':sliderStatus===2?'-100vw':'-200vw'})`}}
                            >
                            <img alt='puzzle-faq' className={styles.faq__first__img}
                                style={{
                                    opacity:sliderStatus===1?1:0,
                                   
                                }}
                                src='/puzzle-faq.jpg'/>
                            <img  alt='puzzle2' className={styles.faq__first__img}
                                style={{
                                    opacity:sliderStatus===2?1:0,
                                    
                                }}
                                src='/puzzle-faq2.jpg'/>
                            <img  alt='puzzle3' className={styles.faq__first__img} 
                                style={{opacity:sliderStatus===3?1:0}}
                                src='/puzzle-faq3.jpg'/>
                        </div>
                
                    </div>
                    <div className={styles.faq__first__arrows}>
                        <img alt='left'  className={styles.faq__first__arrow} src='/left.png'
                            onClick={()=>{
                            if(sliderStatus!=1)
                                {setSliderStatus(sliderStatus-1)}            
                            }}
                            style={{opacity:sliderStatus===1?0:1,transition: '500ms ease opacity',
                                cursor:sliderStatus===1?'default':'pointer'
                        }}/>
                        <img alt='right' className={styles.faq__first__arrow}   src='/right.png' 
                            onClick={()=>{
                            if(sliderStatus<3)
                                {setSliderStatus(sliderStatus+1)}            
                            }}
                            style={{opacity:sliderStatus===3?0:1,
                                transition: '500ms ease all',
                                cursor:sliderStatus===3?'default':'pointer'}}
                        /> 
                    </div>
                   
               
                <div className={styles.faq__first__text}>
                    
                    <li className={styles.faq__first__li}>Количество элементов: 256</li>
                    <li className={styles.faq__first__li}>Размер: 30х30</li>
                    <li className={styles.faq__first__li}>Стоимость: 1470 рублей</li>
                    
                </div>
            </div>
        </section>
    )
}
export default FaqFirstMobile