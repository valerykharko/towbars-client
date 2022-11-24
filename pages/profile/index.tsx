import React from "react";
import Head from "next/head";
import { Profile } from "components";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Личный кабинет</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile link="profile" />
    </>
  );
};

export default ProfilePage;
