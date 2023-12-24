import { Fragment } from "react";
import Styles from "./SixthContent.module.css";

import { peopledata, responsive } from "../../Data/PepoleData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card2 from "./Card2";

const SixthContent = () => {
  const peoplelist = peopledata.map((item) => (
    <Card2 id={item.id} name={item.name} desc={item.description} />
  ));
  return (
    <Fragment>
      <h1 className={Styles.SixthContenth1}>TESTIMONIALS</h1>
      <h3 className={Styles.SixthContenth3}>Testimonials</h3>
      <Carousel responsive={responsive} className="center">
        {peoplelist}
      </Carousel>
    </Fragment>
  );
};

export default SixthContent;
