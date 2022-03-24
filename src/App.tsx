import { useState, useEffect } from "react";
import { socket } from "./socket";
import JoinModal from "./components/joinModal";
import SendMessage from "./components/sendMessage";
import Message from "./components/message";

function App() {
  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState<
    { id: number; name: string; text: string }[]
  >([]);

  useEffect(() => {
    socket.on("warn", handleWarn);
    socket.on("join", handleJoin);
    socket.on("message", handleMessage);

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  const handleWarn = (uid: any, gid: any) => {
    console.log("handleWarn -> ", uid);
  };

  const handleJoin = (uid: any, gid: any) => {
    console.log("handleJoin -> ", uid);
    setChat(true);
  };

  const handleMessage = (data: any, gid: any) => {
    console.log("handleMessage -> ", data);
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
            <div className="inline-flex flex-col-reverse justify-center items-start  ">
              {messages.map((message) => {
                return (
                  <Message
                    key={message.id}
                    name={message.name}
                    text={message.text}
                  />
                );
              })}
            </div>
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
