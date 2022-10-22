import React, { useEffect } from "react";
import {
  AutoBlock,
  FavoritesBlock,
  FeedbacksBlock,
  OrdersBlock,
  OrdersHistoryBlock,
  ProfileBlock,
} from "components";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./ProfilePageBlock.module.scss";

interface ProfilePageBlockProps {
  link: string;
}

const ProfilePageBlock = ({ link }: ProfilePageBlockProps) => {
  const { ordersByUser } = useTypedSelector((state) => state.order);
  const { fetchOrdersByUser } = useActions();

  useEffect(() => {
    fetchOrdersByUser();
  }, []);

  return (
    <div className={styles.container}>
      <ProfileBlock />
      {link === "profile" && ordersByUser && <OrdersBlock />}
      {link === "auto" && <AutoBlock />}
      {link === "favorites" && <FavoritesBlock />}
      {link === "feedbacks" && <FeedbacksBlock />}
      {link === "orders-history" && <OrdersHistoryBlock />}
    </div>
  );
};

export default ProfilePageBlock;
