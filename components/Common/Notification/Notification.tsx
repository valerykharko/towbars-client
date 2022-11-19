import React, { useEffect } from "react";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Notification.module.scss";

interface NotificationProps {
  title: string;
  subTitle: string;
}

const Notification = ({ title, subTitle }: NotificationProps) => {
  const { isActive } = useTypedSelector((state) => state.notification);

  const { setNotificationActive } = useActions();

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setNotificationActive(false);
      }, 6000);
    }
  }, [isActive]);

  return (
    <div className={styles.notification}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.subTitle}>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Notification;
