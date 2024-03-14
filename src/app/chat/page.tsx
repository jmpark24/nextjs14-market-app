import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ChatClient from "./ChatClient";

const ChatPage = async () => {
  const currentUser = getCurrentUser();
  return <ChatClient currentUser={currentUser} />;
};

export default ChatPage;
