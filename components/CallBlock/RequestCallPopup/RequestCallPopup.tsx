import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";

import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import styles from "./RequestCallPopup.module.scss";
import MailService from "http/mailAPI";

interface RequestCallPopupProps {
  makerCallPopupRef: any;
  isPopupOpen: boolean;
  setIsPopupOpen: Function;
}

const RequestCallPopup = ({
  makerCallPopupRef,
  isPopupOpen,
  setIsPopupOpen,
}: RequestCallPopupProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const requestCallPopupRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (event: any) => {
    if (isPopupOpen) {
      const path = event.path || (event.composedPath && event.composedPath());
      if (
        !path.includes(requestCallPopupRef.current) &&
        !path.includes(makerCallPopupRef.current)
      ) {
        setIsPopupOpen(false);
      }
    }
  };

  useEffect(() => {
    isPopupOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    document.body.addEventListener("mousedown", handleOutSideClick);
  }, [isPopupOpen]);

  const makeCallRequest = async () => {
    await MailService.sendCallRequest(phoneNumber)
      .then(() => setIsPopupOpen(false))
      .then(() => Router.push("/request-call-done"));
  };

  return (
    <div className={`${styles.popup} ${isPopupOpen && styles.popupActive}`}>
      <div
        ref={requestCallPopupRef}
        className="bg-white rounded-xl p-8 w-full h-2/3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.body}>
          <div className={styles.header}>
            Мы перезвоним Вам в течении 1 минуты
          </div>
          <div className={styles.tip}>Введите Ваш номер телефона</div>
          <div>
            <PhoneInput
              localization={ru}
              country={"by"}
              onlyCountries={["by", "ru", "pl", "ua"]}
              masks={{ by: "(..) ...-..-..", at: "(....) ...-...." }}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              countryCodeEditable={false}
              inputStyle={{
                width: "200px",
              }}
            />
          </div>
          <div className={styles.button}>
            <button
              disabled={phoneNumber.length !== 12}
              onClick={makeCallRequest}
            >
              Перезвонить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCallPopup;
