import { useState, useEffect } from "react";
import { socket } from "./socket";
import JoinModal from "./components/joinModal";
import SendMessage from "./components/sendMessage";
import MultiMessages from "./components/multiMessages";

interface messageType {
  id: number;
  name: string;
  text: string;
}

function App() {
  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState<messageType[]>([]);

  useEffect(() => {
    socket.on("warn", handleWarn);
    socket.on("join", handleJoin);
    socket.on("message", handleMessage);

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  const handleWarn = (data: any) => {
    console.log("STH unexpected happened", data);
  };

  const handleJoin = (data: any) => {
    setChat(true);
  };

  const handleMessage = (data: any) => {
    setMessages((pre) => [
      ...pre,
      {
        id: data.message.id,
        name: data.owner.name,
        text: data.message.message_content,
      },
    ]);
  };

  const joinChatHandler = (name: string) => {
    socket.emit("join", { name: name });
  };

  const sendMessageHandler = (message: string) => {
    socket.emit("message", { message });
  };

  return (
    <div>
      {!chat && <JoinModal joinChat={joinChatHandler} />}
      {chat && (
        <div>
          <div className="w-10/12 mx-auto h-[70vh] overflow-y-scroll">
            <MultiMessages messages={messages} />
          </div>
          <div>
            <SendMessage sendMessage={sendMessageHandler} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
