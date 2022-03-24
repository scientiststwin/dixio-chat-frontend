import { useState } from "react";

type SendMessagePropsType = {
  sendMessage: (name: string) => void;
};

const SendMessage: React.FC<SendMessagePropsType> = (props) => {
  const [message, setMessage] = useState("");

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.value;
    setMessage(name);
  };

  const onSendHandler = () => {
    props.sendMessage(message);
    setMessage("");
  };

  return (
    <div className="w-full bg-gray-100 py-6 absolute left-0 bottom-0">
      <div className="w-10/12 flex flex-col justify-center items-center mx-auto">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <textarea
            placeholder="Enter a message"
            value={message}
            onChange={onMessageChange}
            className="w-full outline-none border-2 rounded focus:border-indigo-700 p-2"
          />
          <button
            onClick={onSendHandler}
            className="inline-flex self-end items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
