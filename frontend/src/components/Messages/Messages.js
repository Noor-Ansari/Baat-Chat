import React from "react";
import Message from "../Message/Message";

function Messages({ messages, name }) {
  return messages.map((message, idx) => (
    <div key={idx}>
      <Message message={message} name={name} />
    </div>
  ));
}

export default Messages;
