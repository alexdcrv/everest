import { useRouter } from 'next/router'
import styles from '../../styles/pages/main.module.css'

const Phone =()=>{
    const router = useRouter()
    return (
        <section className={styles.main__phone} >
            <p>+79787878</p>
            <p>пн-вс 9.00-21.00</p>     
            <p>sk-everest@mail.ru</p>
            <p>тут можно больше контактов</p>
        </section>
    )
}
export default Phone