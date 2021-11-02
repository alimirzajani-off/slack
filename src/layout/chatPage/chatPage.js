import React from "react";
import { Switch, Route } from "react-router-dom";
import Message from "../../component/message/message";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <Switch>
      <Route path="/" exact></Route>
      <Route path="/channel/:id">
        <Message />
      </Route>
    </Switch>
  );
};

export default ChatPage;
