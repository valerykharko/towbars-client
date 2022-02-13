import React, { useEffect, useReducer } from "react";
import { Chat, JoinBlock, MenuAdmin } from "components";

import styles from "./ChatPage.module.scss";
import axios from "axios";
import reducer from "utils/sockets/reducer";
import socket from "utils/sockets/socket";

const ChatPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj: any) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(
      `${process.env.API_URL}/api/sockets/rooms/${obj.roomId}`
    );
    dispatch({
      type: "SET_DATA",
      payload: data,
    });
  };

  const setUsers = (users: any) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  const addMessage = (message: any) => {
    dispatch({
      type: "NEW_MESSAGE",
      payload: message,
    });
  };

  useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:NEW_MESSAGE", addMessage);
  }, []);

  return (
    <div className={styles.chatContainer}>
      <MenuAdmin />
      <div className={styles.chatWrapper}>
        {state.joined ? (
          <Chat {...state} onAddMessage={addMessage} />
        ) : (
          <JoinBlock onLogin={onLogin} />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
