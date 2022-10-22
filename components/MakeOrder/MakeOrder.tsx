import React from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, message, Steps } from "antd";
const { Step } = Steps;
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import LastStep from "components/MakeOrder/LastStep";
import FirstStep from "components/MakeOrder/FirstStep";
import SecondStep from "components/MakeOrder/SecondStep";

import styles from "./MakeOrder.module.scss";
import Router from "next/router";

const steps = [
  {
    title: "Верификация",
    content: <FirstStep />,
    icon: <SolutionOutlined />,
  },
  {
    title: "Оплата",
    content: <SecondStep />,
    icon: <LoadingOutlined />,
  },
  {
    title: "Готово",
    content: <LastStep />,
    icon: <SmileOutlined />,
  },
];

const MakeOrder = () => {
  const [current, setCurrent] = React.useState(0);

  const { user } = useTypedSelector((state) => state.user);
  const { items, totalPrice, totalCount } = useTypedSelector(
    (state) => state.cart
  );
  const { makeUserOrder } = useActions();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" style={{ marginBottom: 260 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() =>
              message
                .loading("Оплата заказ в процессе...", 2.5)
                .then(() => message.success("Оплата заказа завершена", 2.5))
                .then(() => message.info("Ваш заказ оплачен", 1.5))
                .then(async () => {
                  if (
                    user?.firstName &&
                    user?.secondName &&
                    user?.phoneNumber
                  ) {
                    makeUserOrder(
                      user?.firstName,
                      user?.secondName,
                      user?.phoneNumber,
                      items,
                      totalPrice,
                      totalCount
                    );
                  }
                  await Router.push("/");
                })
            }
          >
            Завершить
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Назад
          </Button>
        )}
      </div>
    </div>
  );
};

export default MakeOrder;
