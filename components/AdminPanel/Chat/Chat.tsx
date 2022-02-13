import React, { useEffect, useRef, useState } from "react";
import socket from "utils/sockets/socket";

import styles from "./Chat.module.scss";

const Chat = ({ users, messages, userName, roomId, onAddMessage }: any) => {
  const [messageValue, setMessageValue] = useState("");
  const messagesRef = useRef<any>(null);

  const onSendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({ userName, text: messageValue });
    setMessageValue("");
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, 99999);
    }
  }, [messages]);

  return (
    <div className={styles.chat}>
      <div className={styles.users}>
        Комната: <b>{roomId}</b>
        <hr />
        <b>Онлайн ({users.length}):</b>
        <ul>
          {users.map((name: any, index: any) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.chatMessages}>
        <div ref={messagesRef} className={styles.messages}>
          {messages.map((message: any) => (
            <div className={styles.message}>
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className={styles.form}
            rows={3}
          />
          <button
            onClick={onSendMessage}
            type="button"
            className="btn btn-primary"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
