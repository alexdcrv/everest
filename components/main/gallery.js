import styles from '../../styles/pages/main.module.css'

const Gallery =()=>{
    return (
        <section className={styles.main__gallery} >
            <img src="time.svg"/>
            <p>100% соблюдение сроков</p>
            <img src="shield.svg"/>
            <p>Гарантия на работу 24 месяца</p>
            <img src="coin.svg"/>
            <p>Выгодная стоимость</p>
            <img src="quality.svg"/>
            <p>Строгий контроль качества</p>
        </section>
    )
}
export default Gallery