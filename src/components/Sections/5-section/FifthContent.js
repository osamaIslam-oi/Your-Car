import { Fragment } from "react";
import styles from "../5-section/FifthContent.module.css";
import image from "../../UI/CarS1.png";
import image0 from "../../UI/CarS2.png";
import image1 from "../../UI/CarS3.png";
import image2 from "../../UI/CarS4.png";
import image3 from "../../UI/CarS5.png";
import image4 from "../../UI/CarS6.png";
import image5 from "../../UI/CarS7.png";
import image6 from "../../UI/CarS8.png";
import image7 from "../../UI/CarS9.png";

const FifthContent = () => {
  return (
    <Fragment>
      <div className={styles.grid1}>
        <img src={image} alt="Sport car" className={styles.image1} />
        <img src={image0} alt="Sport car" className={styles.image1} />
        <img src={image1} alt="Sport car" className={styles.image1} />
        <img src={image2} alt="Sport car" className={styles.image} />
        <img src={image3} alt="Sport car" className={styles.image} />
        <img src={image4} alt="Sport car" className={styles.image} />
        <img src={image5} alt="Sport car" className={styles.image1} />
        <img src={image6} alt="Sport car" className={styles.image1} />
        <img src={image7} alt="Sport car" className={styles.image1} />
        <div className={styles.FifthContent}>
          <h4 className={styles.FifthContenth4}>Tesla Model 3</h4>
          <p className={styles.FifthContentp}>
            Disruptive, avant-garde, futuristic, innovative.
          </p>
          <span className={styles.FifthContentsapan}>Contact</span>
        </div>
      </div>
    </Fragment>
  );
};

export default FifthContent;
