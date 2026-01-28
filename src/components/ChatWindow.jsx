import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { selectedUser, messages } = useContext(ChatContext);

  if (!selectedUser) {
    return (
      <div className="w-2/3 flex items-center justify-center">
        Select a chat
      </div>
    );
  }

  return (
    <div className="w-2/3 flex flex-col">
      <div className="p-4 bg-green-600 text-white">
        {selectedUser.name}
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {(messages[selectedUser.id] || []).map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;
