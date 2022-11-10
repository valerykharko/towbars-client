import React from "react";
import Image from "next/image";

import { CartEmpty, CartTotalPrice, Container } from "components";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import getTitleByBallType from "utils/towbars/getTitleByBallType";
import getPrice from "utils/towbars/getPrice";

import styles from "./CartBlock.module.scss";

const CartBlock = () => {
  const { items, totalCount, totalPrice } = useTypedSelector(
    (state) => state.cart
  );

  const { clearCart, minusCartItem, plusCartItem, removeCartItem } =
    useActions();

  const cartTowbars = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    clearCart();
  };

  const onMinusItem = (id: number) => {
    minusCartItem(id);
  };

  const onPlusItem = (id: number) => {
    plusCartItem(id);
  };

  const onRemoveItem = (id: number) => {
    removeCartItem(id);
  };

  return (
    <Container>
      {Object.keys(items).length > 0 ? (
        <div className={styles.mainBlock}>
          <div className={styles.leftBlock}>
            <div className={styles.header}>
              <div>
                <h1>Корзина</h1>
              </div>
              <div className={styles.clearCart} onClick={onClearCart}>
                <Image
                  src="/static/images/cart/trash.png"
                  alt="trash-icon"
                  width={512}
                  height={512}
                />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className={styles.items}>
              {cartTowbars?.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.image}>
                    <Image
                      src={process.env.API_URL + "/" + item?.img[0]}
                      alt="towbar-img"
                      width={1000}
                      height={650}
                    />
                  </div>

                  <div className={styles.data}>
                    <div className={styles.info}>
                      <span className={styles.title}>
                        {getTitleByBallType(item.ball_type)} {item.vendor_code}
                      </span>
                      <span>
                        {item.manufacturer.name} ({item.manufacturer.country})
                      </span>
                    </div>

                    <div className={styles.controls}>
                      <div
                        className={styles.minus}
                        onClick={() => onMinusItem(item.id)}
                      >
                        <Image
                          src="/static/images/cart/minus.png"
                          alt="minus-icon"
                          width={512}
                          height={512}
                        />
                      </div>

                      <div className={styles.count}>
                        <span>
                          {items[item.id as keyof typeof items].items.length}
                        </span>
                      </div>

                      <div
                        className={styles.plus}
                        onClick={() => onPlusItem(item.id)}
                      >
                        <Image
                          src="/static/images/cart/plus.png"
                          alt="plus-icon"
                          width={512}
                          height={512}
                        />
                      </div>
                    </div>

                    <div className={styles.totalPrice}>
                      <span>
                        {getPrice(
                          items[item.id as keyof typeof items].totalPrice
                        )}
                      </span>
                    </div>
                  </div>

                  <div
                    className={styles.remove}
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <Image
                      src="/static/images/cart/remove.png"
                      alt="plus-icon"
                      width={512}
                      height={512}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CartTotalPrice totalCount={totalCount} totalPrice={totalPrice} />
        </div>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export default CartBlock;
