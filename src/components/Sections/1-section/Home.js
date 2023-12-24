import React, { Fragment } from "react";
import styles from "./Home.module.css";
import image from '../../UI/arrow.png'

const Home = () => {
  return (
    <Fragment>
      <h1 className={styles.firstContenth1}>
        Find the perfect car
        <span className={styles.anotherline}> for you at YourCar.</span>
      </h1>
      <p className={styles.firstContentp}>
        We offer a wide range of
        <span className={styles.anotherline}>cars that cater to your</span>
        <span className={styles.anotherline}>needs and budget. Visit</span>
        <span className={styles.anotherline}>us today and drive away</span>with
        your dream car!
      </p>
      {/* <img src={Rectangle} alt="rectangle" className={styles.rectangle} /> */}
      <span className={styles.FirstContentsapan}>Discover <img src={image} alt="arrow" className={styles.arrow}/></span>
      <button
        className={styles.upButton}
        onClick={() => window.location.replace("/#home")}
      >
        <ion-icon
          name="arrow-up"
          style={{ color: "white", fontWeight: "bold" }}
        ></ion-icon>
      </button>
    </Fragment>
  );
};

export default Home;
