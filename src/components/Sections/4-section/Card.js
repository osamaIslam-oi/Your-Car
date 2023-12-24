import "./Slider.css";
import styles from "./ForthContent.module.css";
import image7 from "../../UI/Vector3.svg";
import image8 from "../../UI/Vector4.svg";
import { useCart } from "react-use-cart";

const Card = (props) => {
  const { addItem } = useCart();

  return (
    <div className={styles.cartShadowbox2}>
      <img src={props.image} alt="car" className={styles.image} />
      <h6 className={styles.cardTitle}>{props.name}</h6>
      <span className={styles.carName}>{props.class}</span>
      <p className={styles.cardesc}>{props.desc}</p>
      <div className={styles.carContent}>
        <div className={styles.container}>
          <div className={styles.Adj}>
            <img src={image7} alt="seat" />
            <p className={styles.pAdj}>{props.seats}</p>
          </div>
          <div className={styles.Adj}>
            <img src={image8} alt="Among us" />
            <p className={styles.pAdj}>{props.luggage}</p>
            <div className={styles.beside}>
              <button
                className={styles.buttonAdj2}
                onClick={() =>
                  addItem({
                    id: props.id,
                    name: props.name,
                    class: props.class,
                    image: props.image,
                    price: props.price,
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
