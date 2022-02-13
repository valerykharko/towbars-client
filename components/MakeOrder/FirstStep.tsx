import React, { useState } from "react";

import styles from "./FirstStep.module.scss";
import { useTypedSelector } from "hooks/useTypedSelector";

const FirstStep = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");

  const { user } = useTypedSelector((state) => state.user);

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Введите ваши данные для заказа</h2>
      </div>
      <div className={styles.inputs}>
        <span>Имя | {user?.firstName}</span>
        <input
          type="text"
          placeholder="Ваше имя"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <span>Фамилия | {user?.secondName}</span>
        <input
          type="text"
          placeholder="Ваша фамилия"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <span>Телефон | {user?.phoneNumber}</span>
        <input
          type="text"
          placeholder="Ваш телефон"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FirstStep;
