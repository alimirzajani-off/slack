import React, { useEffect, useRef, useState } from "react";
import Header from "./header/header";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import MessageInput from "../messageInput/messageInput";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";
import { fetchMessage, fetchWebSocket, fetchDeleteMessage } from "../../action";
import "./message.css";

const Message = (props) => {
  // const mounted = useRef();
  let { id } = useParams();
  const [lastID, setlastID] = useState();

  useEffect(() => {
    if (lastID != id) {
      props.fetchMessage(id);
      props.fetchWebSocket(id);
      setlastID(id);
    }
    // mounted.current = true;
  });

  const handleDeleteChat = (id, ts) => {
    props.fetchDeleteMessage(id, ts);
  };

  const displayChat = () => {
    return props.chat.map((item) => {
      // return [...props.chat].reverse().map((item) => {
      return (
        <li
          key={item.client_msg_id ? item.client_msg_id : item.ts + 1}
          className="chat-text"
        >
          <div className="user-avatar">
            <UserOutlined />
          </div>
          <div className="chat-content">
            <h3>{item.user}</h3>
            <p>{item.text}</p>
          </div>
          <div className="delete-text">
            {item.bot_profile ? (
              <DeleteOutlined
                className="delete-text-icon"
                onClick={() => handleDeleteChat(id, item.ts)}
              />
            ) : null}
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="chat-body fixed-bottom">
        <div className="chat-info">
          <ui>{displayChat()}</ui>
        </div>
        <div className="chat-footer">
          <MessageInput />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { chat: state.message };
};

export default connect(mapStateToProps, {
  fetchMessage,
  fetchWebSocket,
  fetchDeleteMessage,
})(Message);
