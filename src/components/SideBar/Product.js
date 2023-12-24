import React from "react";
import styles from "./Product.module.css";
import { useCart } from "react-use-cart";

const Product = (props) => {
  const { isEmpty, updateItemQuantity, emptyCart, items } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">your Cart Is Empty</h1>;
  }

  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table table-light table-hovr m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.card}>
                        <div className={styles.sidebarContent}>
                          <h6 className={styles.Producth6}>{item.name}</h6>
                          <p className={styles.Productp}>{item.class}</p>
                          <button
                            className={styles.buttonAdj}
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className={styles.centerAdj}>
                            {item.quantity}
                          </span>
                          <button
                            className={styles.buttonAdj2}
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <img
                          src={item.image}
                          alt="car"
                          className={styles.image}
                        />

                        <button
                          className="delete"
                          onClick={() => {
                            emptyCart(item.id);
                          }}
                        >
                          Delete all
                          <ion-icon name="trash-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
