import React, { useState } from "react";
import { Checkbox } from "antd";
import { Form, Field } from "react-final-form";
import Styles from "./Card/Styles";
import Card from "./Card/Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Card/cardUtils";

import "react-credit-cards/es/styles-compiled.css";
import styles from "./SecondStep.module.scss";

const SecondStep = () => {
  const [typeOfPay, setTypeOfPay] = useState(1);

  const onSubmit = async (values: any) => {
    // console.log(values);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Выберите способ оплаты</span>
      </div>
      <div className={styles.checkbox}>
        <Checkbox checked={typeOfPay === 1} onChange={() => setTypeOfPay(1)}>
          При получении
        </Checkbox>
        <Checkbox checked={typeOfPay === 2} onChange={() => setTypeOfPay(2)}>
          Картой онлайн
        </Checkbox>
      </div>
      {typeOfPay === 2 ? (
        <Styles>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, values, active }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Card
                    number={values.number || ""}
                    name={values.name || ""}
                    expiry={values.expiry || ""}
                    cvc={values.cvc || ""}
                    focused={active}
                  />
                  <div>
                    <Field
                      name="number"
                      component="input"
                      type="text"
                      pattern="[\d| ]{16,22}"
                      placeholder="Card Number"
                      format={formatCreditCardNumber}
                    />
                  </div>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <Field
                      name="expiry"
                      component="input"
                      type="text"
                      pattern="\d\d/\d\d"
                      placeholder="Valid Thru"
                      format={formatExpirationDate}
                    />
                    <Field
                      name="cvc"
                      component="input"
                      type="text"
                      pattern="\d{3,4}"
                      placeholder="CVC"
                      format={formatCVC}
                    />
                  </div>
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Submit
                    </button>
                  </div>
                </form>
              );
            }}
          />
        </Styles>
      ) : (
        ""
      )}
    </div>
  );
};

export default SecondStep;
