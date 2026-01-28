import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./context/ChatContext";

const App = () => {
  return (
    <ChatProvider>
      <div className="h-screen flex">
        <Sidebar />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
};

export default App;
