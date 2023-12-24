import { Fragment } from "react";
import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";
import { useCart } from "react-use-cart";

const CartButton = (props) => {
  
  const {
    
    totalItems,
   
  } = useCart();
  return (
    <Fragment>
      <button className={styles.button} onClick={props.onClickShopButton}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span className={styles.badge}>{totalItems}</span>
      </button>
    </Fragment>
  );
};
export default CartButton;
