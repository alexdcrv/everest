import styles from "../../styles/pages/mainMob.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const MobBanner = ({improvement, contacts}) => {

  return (
    <section className={styles.mob__banner}>
      <div className={styles.mob__banner_name}>СК ЭВЕРЕСТ</div>
      <div className={styles.mob__banner_text}>
        Строительно-монтажные работы в Крыму
      </div>
      <div className={styles.mob__banner_contacts}>
        <>
          <CopyToClipboard
            text={"+79180626749"}
            onCopy={() => {
              toast.success("Номер скопирован");
            }}
          >
            <div style={{ cursor: "pointer" }}>+7 (918) 062-67-49</div>
          </CopyToClipboard>
        </>
        <div>Пн-Пт 9.00-18.00</div>
        <>
          <CopyToClipboard
            text={"skeverest82@yandex.ru"}
            onCopy={() => {
              toast.success("Почта скопирована");
            }}
          >
            <div style={{ cursor: "pointer" }}>skeverest82@yandex.ru</div>
          </CopyToClipboard>
        </>
      </div>

      <div>
        <button onClick={() => {
            improvement.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }} className={styles.mob__banner_button}>Виды работ</button>
        <button onClick={() => {
            contacts.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }} className={styles.mob__banner_button}>Контакты</button>
      </div>
    </section>
  );
};
export default MobBanner;
