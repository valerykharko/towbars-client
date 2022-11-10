import React, { useEffect } from "react";
import {
  Container,
  OrdersBlock,
  OrdersHistoryBlock,
  ProfileHeader,
} from "components";
import { useActions } from "hooks/useActions";

interface ProfileProps {
  link: string;
}

const Profile = ({ link }: ProfileProps) => {
  const { fetchOrdersByUser } = useActions();

  useEffect(() => {
    fetchOrdersByUser();
  }, []);

  return (
    <Container>
      <ProfileHeader />
      {link === "profile" && <OrdersBlock />}
      {link === "orders-history" && <OrdersHistoryBlock />}
    </Container>
  );
};

export default Profile;
