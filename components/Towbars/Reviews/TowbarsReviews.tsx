import React, { useEffect } from "react";
import { ReviewsPages } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarsReviews.module.scss";

interface TowbarsReviewsModuleProps {
  towbar: ITowbar;
}

const TowbarsReviewsModule = ({ towbar }: TowbarsReviewsModuleProps) => {
  const { ratings_by_towbar, pageT, limitT } = useTypedSelector(
    (state) => state.rating
  );
  const { user } = useTypedSelector((state) => state.user);

  const { fetchRatingsByTowbar, fetchIsUserRating } = useActions();

  useEffect(() => {
    towbar && fetchRatingsByTowbar(towbar.id, pageT, limitT);
    towbar && user && fetchIsUserRating(towbar.id);
  }, [towbar, user]);

  return (
    <div className={styles.wrapper}>
      {ratings_by_towbar.length > 0 ? (
        <>
          <div className={styles.container}>
            {ratings_by_towbar.map((item) => (
              <div key={item.date} className={styles.review}>
                <div className={styles.review__header}>
                  <div className={styles.review__header__left}>
                    <div className={styles.review__header__leftImage}>
                      <img src="/static/images/man.png" alt="user-icon" />
                    </div>
                    <div className={styles.review__header__leftUser}>
                      <h3>
                        {item.user.secondName} {item.user.firstName}
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
          <ReviewsPages />
        </>
      ) : (
        <div className={styles.tip}>Будьте первым, кто добавит отзыв! :)</div>
      )}
    </div>
  );
};

export default TowbarsReviewsModule;
