import { useRouter } from 'next/router'
import styles from '../styles/components/header.module.css'


const Header =()=>{
    const router = useRouter()
    const linkTo =(point)=>{
        router.push(`../${point}`)
    }
    return (
        <header onClick={()=>linkTo('../')} className={styles.header__container}>
            <div className={styles.header__text}>
                GAN 13 MILLION PUZZLE
            </div>

        </header>
    )
}
export default Header