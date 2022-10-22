import React from "react";
import $api from "http/index";
import openNotification from "utils/notifications";

import styles from "./JoinBlock.module.scss";

const JoinBlock = ({ onLogin }: any) => {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return openNotification("Возникла ошибка", "Неправильные данные!");
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await $api.post(`${process.env.API_URL}` + "/api/sockets/rooms", obj);
    onLogin(obj);
  };

  return (
    <div className={styles.enterBlock}>
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={onEnter}>
        {isLoading ? "Подключение..." : "Подключиться"}
      </button>
    </div>
  );
};

export default JoinBlock;
