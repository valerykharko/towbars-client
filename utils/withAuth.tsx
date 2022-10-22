import React from "react";
import Router from "next/router";

const withAuth = (WrappedComponent: any) => {
  return async (props: any) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      // If there is no access token we redirect to "/" page.
      if (!token) {
        await Router.push("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
