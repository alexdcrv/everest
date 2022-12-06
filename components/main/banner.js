
import { useRouter } from 'next/router'
import styles from '../../styles/pages/main.module.css'

const Banner = () =>{
    const router = useRouter()

    return (
        <section className={styles.main__banner} >
            <div className={styles.main__banner_header}>
                <div className={styles.main__banner_name}>СК ЭВЕРЕСТ</div>
                <div className={styles.main__banner_contacts}>
                    <div>+79787878</div>
                    <div>пн-вс 9.00-21.00</div>
                    <div>sk-everest@mail.ru</div>   
                </div>
            </div>
            <div className={styles.main__banner_rest}>
                <img src="everest.svg"></img>
                <div className={styles.main__banner_about}>
                    <div className={styles.main__banner_text}>Строительно-монтажные работы в Крыму</div>
                    <button className={styles.main__banner_button}>Виды работ</button>
                    <button className={styles.main__banner_button}>Контакты</button>
                </div>
            </div>
            <div>

            </div>
           
        </section>
    )
}
export default Banner