import { users } from "../data/users";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Sidebar = () => {
  const { setSelectedUser } = useContext(ChatContext);

  return (
    <div className="w-1/3 bg-white border-r">
      <h2 className="p-4 font-bold">Chats</h2>
      {users.map(user => (
        <div
          key={user.id}
          onClick={() => setSelectedUser(user)}
          className="p-4 cursor-pointer hover:bg-gray-200"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
