import React, { useEffect } from "react";
import { FeedbacksPages } from "components/index";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./FeedbacksBlock.module.scss";

const FeedbacksBlock = () => {
  const { ratings_by_user, pageU, limitU } = useTypedSelector(
    (state) => state.rating
  );

  const { user } = useTypedSelector((state) => state.user);

  const { fetchRatingsByUser } = useActions();

  useEffect(() => {
    user && fetchRatingsByUser(pageU, limitU);
  }, [user, pageU]);

  return (
    <div className={styles.wrapper}>
      {ratings_by_user ? (
        <>
          <div className={styles.container}>
            {ratings_by_user.map((item) => (
              <div key={item.date} className={styles.review}>
                <div className={styles.review__header}>
                  <div className={styles.review__header__left}>
                    <div className={styles.review__header__leftImage}>
                      <img
                        src={process.env.API_URL! + "/" + item?.towbar.img[0]}
                        alt=""
                      />
                    </div>
                    <div className={styles.review__header__leftUser}>
                      <h3>
                        Фаркоп {item?.manufacturer?.name}{" "}
                        {item?.towbar?.vendor_code}
                      </h3>
                      <span>{item.date.split("T")[0]}</span>
                    </div>
                  </div>
                  <div className={styles.review__header__center}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={styles.review__header__right}>
                    <div>{item.value}</div>
                  </div>
                </div>
                <div className={styles.review__info}>
                  <div className={styles.review__infoText}>{item.text}</div>
                  <div className={styles.review__infoImage}>
                    <img
                      src={process.env.API_URL! + "/" + item?.img[0]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FeedbacksPages />
        </>
      ) : (
        <div className={styles.tip}>
          <h3>Вы пока еще не оставили ни одного отзыва :(</h3>
        </div>
      )}
    </div>
  );
};

export default FeedbacksBlock;
