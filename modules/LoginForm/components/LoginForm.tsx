import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { login } from "store/actions/userActions";
import { useActions } from "hooks/useActions";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useActions();

  const onFinish = async (values: { email: string; password: string }) => {
    await Promise.all([login(values.email, values.password)]);
    localStorage.getItem("token") && Router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.info}>
          <img src="/static/images/auth/enter-icon.png" alt="" />
          <h2>Войти в аккаунт</h2>
          <span>Пожалуйста, войдите в свой аккаунт</span>
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
                rules={[{ required: true, message: "Введите Ваш пароль" }]}
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
              <div className={styles.footer}>
                <div>
                  <Checkbox defaultChecked>Запомнить меня</Checkbox>
                </div>
                <div>
                  <Link href={"/auth/recovery"}>
                    <span className={styles.recover}>Забыл пароль</span>
                  </Link>
                </div>
              </div>
              <Form.Item className={styles.button}>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Войти
                  </Button>
                </div>
                <Link href={"/auth/registration"}>
                  <div className={styles.other}>
                    <span>Зарегистрироваться</span>
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

export default LoginForm;
