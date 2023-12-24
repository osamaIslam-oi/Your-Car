import React, { Fragment } from "react";
import styels from "./SecondContent.module.css";
import image from "../../UI/Car1.png";

const SecondContent = () => {
  return (
    <Fragment >
      <div className={styels.gridAdj}>
        <h1 className={styels.secondContenth1}>ABOUT US </h1>
        <h3 className={styels.secondContenth3}>About </h3>
        <p className={styels.secondContentp}>
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients' unique preferences
          and requirements. We have an extensive selection of high-end vehicles,
          ranging from sports cars to SUVs, all of which are maintained to the
          highest standards of quality and safety.
          <span className={styels.anotherline}>
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </span>
        </p>
      </div>
      <img src={image} alt="brown car" className={styels.toRight} />
    </Fragment>
  );
};

export default SecondContent;
