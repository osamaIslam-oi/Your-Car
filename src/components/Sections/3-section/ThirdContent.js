import React, { Fragment } from "react";
import styles from "./ThirdCotent.module.css";
import image from "../../UI/Vector2.svg";
import image2 from "../../UI/Vector1.svg";
import image3 from "../../UI/Vector.svg";
import Card from "react-bootstrap/Card";

const ThirdContent = () => {
  return (
    <Fragment>
      <h1 className={styles.ThirdContenth1}>SERVICES</h1>
      <h3 className={styles.ThirdContenth3}>Services</h3>
      <div className={styles.card}>
        <div class="container text-center">
          <div class="row">
            <div class="col-md-4 col-xs-2">
              <Card className={styles.card1}>
                <div className={styles.center}>
                  <Card.Img
                    variant="top"
                    src={image2}
                    className={styles.smaller}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Card rental</Card.Title>
                  <Card.Text>
                    If you're in need of a luxury car rental, look no further
                    than YourCar. Our fleet of high-end vehicles is regularly
                    maintained and serviced to ensure that you have a safe and
                    comfortable driving experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card className={styles.card1}>
                <div className={styles.center}>
                  <Card.Img
                    variant="top"
                    src={image}
                    className={styles.smaller}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="ms-3">Card Sales</Card.Title>
                  <Card.Text>
                    At YourCar, we offer a wide selection of luxury vehicles for
                    sale. Whether you're in the market for a sleek sports car or
                    a spacious SUV, we have the perfect vehicle to fit your
                    needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md">
              <Card className={styles.card1}>
                <div className={styles.center}>
                  <Card.Img
                    variant="top"
                    src={image3}
                    className={styles.smaller}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Card seling</Card.Title>
                  <Card.Text>
                    At YourCar, we make it easy to sell your car. Simply bring
                    your vehicle in for an appraisal, and we'll handle the rest.
                    We offer fair prices and a hassle-free selling process, so
                    you can get your vehicle with minimal effort.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThirdContent;
