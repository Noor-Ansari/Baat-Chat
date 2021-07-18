import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/ChatPage/ChatPage";
import JoinPage from "./components/JoinPage/JoinPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={JoinPage} />
      <Route path="/chat-page" component={ChatPage} />
    </Router>
  );
}

export default App;
