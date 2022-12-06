import styles from '../styles/components/footer.module.css'
import { useRouter } from 'next/router'
// import ReactGA from 'react-ga4';
import * as gtag from '../lib/gtag'
const Footer =({page})=>{
    const router = useRouter()
    const linkTo =(point)=>{
        if(point==="links"){
           gtag.event({
            category:'Кнопка редиректа на покупки (с сайта/ozon)',
            action:`Футер.Кнопка ЗАКАЗАТЬ со страницы ${page}`,
            
           })
        }
        router.push(`../${point}`)
        
    }
    
    return (
        <footer >
            <div className={styles.main}>
                <a className={styles.footer__order} onClick={()=>linkTo('links')}style={{visibility:page==='links'?'hidden':'visible'}} >ЗАКАЗАТЬ</a>
                <nav className={styles.footer__buttons}>
                    <div style={{display:page==='main'?'block':'none'}}>
                        <button className={styles.footer__order__mob} style={{ backgroundColor:'black',
                            color:'#FADB05',border: '1px solid #FADB05',marginTop:'78px',marginBottom:'0px'}} onClick={()=>linkTo('faq')}>ПОДРОБНЕЕ
                        </button>
                    </div>
                    <a className={styles.footer__order__mob} onClick={()=>linkTo('links')} style={{display:page==='links'?'none':''}}>ЗАКАЗАТЬ</a>
                    <button className={styles.footer__button} style={{display:page==='main'?'none':'block'}} onClick={()=>linkTo('../')}>ГЛАВНАЯ</button>
                    <button className={styles.footer__button} style={{display:page==='faq'?'none':'block'}} onClick={()=>linkTo('faq')}>ВОПРОСЫ И ОТВЕТЫ</button>
                    <button className={styles.footer__button} style={{display:page==='privacy-policy'?'none':'block'}} onClick={()=>linkTo('privacy-policy')}>ПРАВИЛА АКЦИИ</button>
                    <button className={styles.footer__button} style={{display:page==='contacts'?'none':'block'}} onClick={()=>linkTo('contacts')}>СВЯЗАТЬСЯ С НАМИ</button>
                    <p className={styles.footer__year} > 2021</p>

                </nav>
                
            </div>
        </footer>
    )
}
export default Footer