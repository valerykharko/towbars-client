import React, { useState } from "react";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import styles from "./RegisterForm.module.scss";
import { useActions } from "hooks/useActions";
import Router from "next/router";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registration } = useActions();

  const onFinish = async (values: { email: string; password: string }) => {
    await Promise.all([registration(values.email, values.password)]);
    localStorage.getItem("token") && (await Router.push("/"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.info}>
          <img src="/static/images/auth/register-icon.png" alt="" />
          <h2>Регистрация</h2>
          <span>Пожалуйста, введите данные</span>
        </div>
        <div className={styles.mainBlock}>
          <div>
            <Form
              name="form"
              className={styles.form}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                className={styles.formItem}
                rules={[{ required: true, message: "Введите Ваш email" }]}
              >
                <Input
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                className={styles.formItem}
                rules={[
                  {
                    required: true,
                    message: "Введите Ваш пароль (от 3 до 32 символов)",
                    max: 32,
                    min: 3,
                  },
                ]}
              >
                <Input
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>
              {/*<Form.Item*/}
              {/*  name="password"*/}
              {/*  className={styles.formItem}*/}
              {/*  rules={[*/}
              {/*    { required: true, message: "Please input your Password!" },*/}
              {/*  ]}*/}
              {/*>*/}
              {/*  <Input*/}
              {/*    className={styles.input}*/}
              {/*    prefix={<LockOutlined className="site-form-item-icon" />}*/}
              {/*    type="password"*/}
              {/*    placeholder="Повторите пароль"*/}
              {/*  />*/}
              {/*</Form.Item>*/}
              <Form.Item className={styles.button}>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Зарегистрироваться
                  </Button>
                </div>
                <Link href={"/auth/login"}>
                  <div className={styles.other}>
                    <span>Войти</span>
                  </div>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
