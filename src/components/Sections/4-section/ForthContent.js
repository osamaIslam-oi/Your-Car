import React, { Fragment } from "react";
import styles from "./ForthContent.module.css";
import "./Slider.css";
import Card from "./Card";
import { Cars, responsive } from "../../Data/CarsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ForthContent = () => {
 
  const carlist = Cars.map((car) => (
    <Card
      key={car.id}
      id={car.id}
      name={car.name}
      class={car.class}
      desc={car.description}
      seats={car.seats}
      luggage={car.luggage}
      image={car.image}
      price={car.price}
      car={car}
      quant={car.quantity}

    />
  ));

  return (
    <Fragment>
      <h1 className={styles.ForthContenth1}>Cars</h1>
      <h3 className={styles.ForthContenth3}>Cars</h3>
      <Carousel
        showDots={true}
        responsive={responsive}
        className="center"
      >
        {carlist}
      </Carousel>
    </Fragment>
  );
};

export default ForthContent;
