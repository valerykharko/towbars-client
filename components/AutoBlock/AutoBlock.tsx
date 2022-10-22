import React from "react";
import { SelectionBlock } from "components";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./AutoBlock.module.scss";

const AutoBlock = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { removeUserAuto } = useActions();

  const onCancelClick = () => {
    removeUserAuto();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {user?.autoId ? (
          <div className={styles.block}>
            <div className={styles.header}>
              <div className={styles.left}>{""}</div>
              <div className={styles.center}>
                <h2>
                  {user?.user_auto?.brand} {user?.user_auto?.model}{" "}
                  {user?.user_auto?.generation} {user?.user_auto?.body_style}
                </h2>
              </div>
              <div className={styles.right}>
                <div className={styles.cancel} onClick={onCancelClick}>
                  <img src="/static/images/help/cancel.png" alt="cancel-icon" />
                </div>
              </div>
            </div>
            <img
              src={process.env.API_URL! + "/" + user.user_auto?.img[0]}
              alt="user-auto"
            />
          </div>
        ) : (
          <div className={styles.selectionBlock}>
            <SelectionBlock
              textButton={"Выбрать"}
              text={"Выберите Ваш автомобиль"}
              location={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoBlock;
