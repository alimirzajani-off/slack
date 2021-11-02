import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/header/header";
import Menu from "./layout/menu/menu";
import "./App.css";
import ChatPage from "./layout/chatPage/chatPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <ChatPage />
      </div>
    </Router>
  );
};

export default App;
