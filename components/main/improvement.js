import { useRouter } from "next/router";
import styles from "../../styles/pages/main.module.css";

const Improvement = () => {
  const router = useRouter();
  return (
    <section className={styles.main__improvement}>
      <div>
        <h1>Благоустройство</h1>
        <ul>
            <li>установка дорожных бордюров</li>
            <li>установка поребриков садовых</li>
            <li>укладка тротуарной плитки</li>
            <li>озеленение</li>
            <li>ландшафт</li>
            <li>установка лавочек, урн</li>
            <li>детские площадки</li>
        </ul>
      </div>
      <img src="park.png"/>
    </section>
  );
};
export default Improvement;
