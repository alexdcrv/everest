import styles from "../../styles/pages/main.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const Banner = ({ improvement, contacts }) => {
  return (
    <section className={styles.main__banner}>
      <div className={styles.main__banner_header}>
        <div className={styles.main__banner_name}>СК ЭВЕРЕСТ</div>

        <div className={styles.main__banner_contacts}>
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
      </div>
      <div className={styles.main__banner_rest}>
        <img src="everest.svg"></img>
        <div className={styles.main__banner_about}>
          <div className={styles.main__banner_text}>
            Строительно-монтажные работы в Крыму
          </div>
          <button
            className={styles.main__banner_button}
            onClick={() => {
              improvement.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            Виды работ
          </button>
          <button
            className={styles.main__banner_button}
            onClick={() => {
              contacts.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            Контакты
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Banner;
