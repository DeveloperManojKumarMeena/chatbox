import { createContext, useState } from "react";
import { chats as initialChats } from "../data/chats";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(initialChats);

  const sendMessage = (text) => {
    setMessages(prev => ({
      ...prev,
      [selectedUser.id]: [
        ...(prev[selectedUser.id] || []),
        {
          sender: "me",
          text,
          time: new Date().toLocaleTimeString()
        }
      ]
    }));
  };

  return (
    <ChatContext.Provider value={{
      selectedUser,
      setSelectedUser,
      messages,
      sendMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
};
