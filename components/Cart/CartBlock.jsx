import React from "react";
import { Checkbox, Empty, Popconfirm } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./CartBlock.module.scss";
import Router from "next/router";

const CartBlock = () => {
  const [checkedList, setCheckedList] = React.useState([]);
  const [checkAll, setCheckAll] = React.useState(true);

  const { items, totalCount, totalPrice } = useTypedSelector(
    (state) => state.cart
  );

  const { clearCart, removeCartItem, plusCartItem, minusCartItem } =
    useActions();

  const cartTowbars = Object.keys(items).map((key) => {
    // @ts-ignore
    return items[key].items[0];
  });

  const onChange = (list) => {
    setCheckedList(list);
    setCheckAll(true);
  };

  const onCheckAllChange = (e) => {
    setCheckAll(e.target.checked);
  };

  const onClearCart = () => {
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  const onPlusItem = (id) => {
    plusCartItem(id);
  };

  const onMinusItem = (id) => {
    minusCartItem(id);
  };

  const onRemoveConfirm = (id) =>
    setTimeout(() => {
      removeCartItem(id);
    }, 500);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="/static/images/cartY.png" alt="cart" />
        <span>Корзина</span>
      </div>
      <div className={styles.mainBlock}>
        {Object.keys(items).length !== 0 ? (
          <div className={styles.leftBlock}>
            <div className={styles.leftBlockTitle}>
              <div>
                <Checkbox
                  onChange={onCheckAllChange}
                  checked={checkAll}
                  style={{ fontWeight: "bold" }}
                >
                  Выбрать все
                </Checkbox>
              </div>
              <Popconfirm
                title="Вы действительно хотите удалить?"
                onConfirm={onClearCart}
              >
                <div className={styles.clearCart}>
                  <span>Удалить выбранные</span>
                </div>
              </Popconfirm>
            </div>
            <div>
              {cartTowbars?.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div>
                    <Checkbox checked={true} style={{ marginRight: 15 }} />
                  </div>
                  <div className={styles.image}>
                    <img
                      src={process.env.API_URL + "/" + item?.img[0]}
                      alt=""
                    />
                  </div>
                  <div className={styles.info}>
                    <span>Фаркоп {item.vendor_code}</span>
                    <span>
                      Нагрузка: {item.max_hor}/{item.max_ver}
                    </span>
                  </div>
                  <div
                    className={styles.remove}
                    onClick={() => onMinusItem(item.id)}
                  >
                    <img src="/static/images/remove.png" alt="remove-icon" />
                  </div>
                  <div className={styles.countOf}>
                    <span>{items[item.id].items.length}</span>
                  </div>
                  <div
                    className={styles.add}
                    onClick={() => onPlusItem(item.id)}
                  >
                    <img src="/static/images/add.png" alt="add-icon" />
                  </div>
                  <div className={styles.totalPriceOf}>
                    <span>{items[item.id].totalPrice} BYN</span>
                  </div>
                  <Popconfirm
                    title="Вы действительно хотите удалить?"
                    onConfirm={() => onRemoveConfirm(item.id)}
                  >
                    <div className={styles.removeOf}>
                      <img src="/static/images/cross.png" alt="cross" />
                    </div>
                  </Popconfirm>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Empty
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "0 1 64%",
              width: 500,
            }}
          />
        )}
        <div className={styles.rightBlock}>
          <div className={styles.topWrapper}>
            <div className={styles.top}>
              <button
                disabled={!Boolean(Object.keys(items).length)}
                onClick={() => Router.push("/order")}
              >
                Перейти к оформлению
              </button>
              <span>
                Доступные способы и время доставки можно выбрать при оформлении
                заказа
              </span>
            </div>
          </div>
          <div className={styles.central}>
            <div className={styles.elem1}>
              <span>Ваша корзина</span>
              <span>{totalCount} товар(ов)</span>
            </div>
            <div className={styles.elem2}>
              <span>Товары ({totalCount})</span>
              <span>{totalPrice} BYN</span>
            </div>
            <div className={styles.elem3}>
              <span>Скидка</span>
              <span>- 0 BYN</span>
            </div>
            <div className={styles.elem4}>
              <span>Подробнее</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <span>Общая стоимость</span>
            <span>{totalPrice} BYN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
