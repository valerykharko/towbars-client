import React from "react";
import { notification } from "antd";

import styles from "./index.module.scss";

const openTrueNotification = (message: string, description: string) => {
  notification.open({
    message: message,
    description: description,
    icon: (
      <img
        className={styles.icon}
        src="/static/images/profile/checked.png"
        alt="checked-icon"
      />
    ),
  });
};

export default openTrueNotification;
