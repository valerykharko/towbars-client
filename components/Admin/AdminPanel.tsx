import React from "react";
import Link from "next/link";

import { Container } from "components";

import styles from "./AdminPanel.module.scss";

interface AdminPanelProps {
  link: string;
  children?: React.ReactNode;
}

const AdminPanel = ({ link, children }: AdminPanelProps) => {
  return (
    <Container>
      <div className={styles.adminPanel}>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <Link href="/admin-panel/database/auto">
              <span>Авто</span>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/admin-panel/database/towbars">
              <span>Фаркопы</span>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/admin-panel/database/orders">
              <span>Заказы</span>
            </Link>
          </div>
        </div>
        <h1>Админ-панель | {link}</h1>
      </div>
      {children}
    </Container>
  );
};

export default AdminPanel;
