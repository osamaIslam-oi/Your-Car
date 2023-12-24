import { Fragment } from "react";
import Styles from "./SixthContent.module.css";
import image from "../../UI/start.png";
import image1 from "../../UI/CarT1.png";

const Card2 = (props) => {
  return (
    <Fragment>
      <div className={Styles.SixthContent}>
        <p className={Styles.SixthContentp}>{props.desc}</p>
        <div className={Styles.movetoright}>
          <img src={image} alt="Stars" />
          <p className={Styles.SixthContenth5}>
            {props.name}
            <span className={Styles.SixthContentspan}>Cairo</span>
          </p>
          <img src={image1} alt="Blue car" className={Styles.SixthContentimg} />
        </div>
      </div>
    </Fragment>
  );
};

export default Card2;
