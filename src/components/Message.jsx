const Message = ({ msg }) => {
  const isMe = msg.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`p-2 rounded max-w-xs
        ${isMe ? "bg-green-300" : "bg-white"}`}>
        <p>{msg.text}</p>
        <small className="text-xs">{msg.time}</small>
      </div>
    </div>
  );
};

export default Message;
