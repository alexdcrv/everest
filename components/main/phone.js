import { useRouter } from 'next/router'
import styles from '../../styles/pages/main.module.css'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from 'react-toastify';
const Phone =()=>{
    const router = useRouter()
    return (
        <section className={styles.main__phone} >
            <><CopyToClipboard text={'+79788349927'} onCopy={()=>{ toast.success('Номер скопирован')}} ><p style={{cursor:'pointer'}}>+7 (978) 834-99-27</p></CopyToClipboard></>
            <><CopyToClipboard text={'+79180626749'} onCopy={()=>{ toast.success('Номер скопирован')}} ><p style={{cursor:'pointer'}}>+7 (918) 062-67-49</p></CopyToClipboard></>
            <p>Пн-Пт 9.00-18.00</p>
            <><CopyToClipboard text={'skeverest82@yandex.ru'} onCopy={()=>{ toast.success('Почта скопирована')}} ><p style={{cursor:'pointer'}}>skeverest82@yandex.ru</p></CopyToClipboard></>
        </section>
    )
}
export default Phone