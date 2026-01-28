import { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { sendMessage } = useContext(ChatContext);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  return (
    <div className="p-4 bg-white flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border p-2"
        placeholder="Type a message"
      />
      <button
        onClick={handleSend}
        className="bg-green-600 text-white px-4"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
