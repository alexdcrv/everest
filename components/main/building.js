import { useRouter } from "next/router";
import styles from "../../styles/pages/main.module.css";

const Building = () => {
  const router = useRouter();
  return (
    <section className={styles.main__building}>
      <img src="house.png"/>
      <div className={styles.main__building_text}>
        <h1>Строительство домов, коттеджей под ключ.</h1>
        <ul>
            <li>бетонные(фундамент, цоколь,монолит)</li>
            <li>кладка блока</li>
            <li>кладка кирпича</li>
            <li>кровля, штукатурка</li>
            <li>фасадные работы любой сложности</li>
        </ul>
        <h1>Сантехнические работы, электрика.</h1>
      </div>
    </section>
  );
};
export default Building 
