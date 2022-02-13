import React from "react";
import { notification } from "antd";

import styles from "./index.module.scss";

const openNotification = (message: string, description: string) => {
  notification.open({
    message: message,
    description: description,
    icon: (
      <img
        className={styles.icon}
        src="/static/images/profile/cancel.png"
        alt="cancel-icon"
      />
    ),
  });
};

export default openNotification;
