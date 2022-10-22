import React, { useState } from "react";
import { useRouter } from "next/router";
import { Menu, Button } from "antd";
const { SubMenu } = Menu;
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DatabaseFilled,
  WechatFilled,
  IdcardFilled,
  FileTextFilled,
  CarFilled,
  PieChartFilled,
} from "@ant-design/icons";

import styles from "./Menu.module.scss";

const MenuAdmin = () => {
  const [state, setState] = useState(true);

  const toggleCollapsed = () => {
    setState(!state);
  };

  const router = useRouter();

  return (
    <div className={styles.menuContainer}>
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            marginBottom: 5,
            fontSize: "20px",
          }}
        >
          {state ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={[
            router.asPath === "/admin-panel/online-chat"
              ? "3"
              : router.asPath === "/admin-panel/catalog"
              ? "2"
              : router.asPath === "/admin-panel/db/users"
              ? "4"
              : router.asPath === "/admin-panel/db/autos"
              ? "5"
              : router.asPath === "/admin-panel/db/towbars"
              ? "6"
              : router.asPath === "/admin-panel/db/statistics"
              ? "9"
              : router.asPath === "/admin-panel/statistics"
              ? "sub3"
              : "1",
          ]}
          mode="inline"
          theme="light"
          inlineCollapsed={state}
        >
          <Menu.Item
            key="1"
            icon={<FileTextFilled style={{ fontSize: "20px" }} />}
            onClick={() => router.push("/admin-panel/orders")}
          >
            Управление заказами
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FileTextFilled style={{ fontSize: "20px" }} />}
            onClick={() => router.push("/admin-panel/catalog")}
          >
            Управление каталогом
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<WechatFilled style={{ fontSize: "22px" }} />}
            onClick={() => router.push("/admin-panel/online-chat")}
          >
            Мессенджер
          </Menu.Item>
          <SubMenu
            key="sub1"
            title="Управление сущностями"
            icon={<DatabaseFilled style={{ fontSize: "20px" }} />}
          >
            <Menu.Item
              icon={<IdcardFilled style={{ fontSize: "18px" }} />}
              key="4"
              onClick={() => router.push("/admin-panel/db/users")}
            >
              Пользователи
            </Menu.Item>
            <Menu.Item
              icon={<CarFilled style={{ fontSize: "18px" }} />}
              key="5"
              onClick={() => router.push("/admin-panel/db/autos")}
            >
              Автомобили
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => router.push("/admin-panel/db/towbars")}
            >
              Фаркопы
            </Menu.Item>
            <Menu.Item key="7">Электрика</Menu.Item>
            <Menu.Item key="8">Аксессуары</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined style={{ fontSize: "18px" }} />}
            title="Статистика"
          >
            {/*<SubMenu*/}
            {/*  key="sub3"*/}
            {/*  title="По заказам"*/}
            {/*  icon={<PieChartFilled style={{ fontSize: "20px" }} />}*/}
            {/*>*/}
              <Menu.Item
                key="9"
                onClick={() => router.push("/admin-panel/statistics")}
                icon={<PieChartFilled style={{ fontSize: "20px" }} />}
              >
                По заказам
              </Menu.Item>
              {/*<Menu.Item key="10">электрики</Menu.Item>*/}
              {/*<Menu.Item key="11">аксессуаров</Menu.Item>*/}
            {/*</SubMenu>*/}
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default MenuAdmin;
