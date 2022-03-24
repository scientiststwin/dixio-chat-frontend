import React from "react";
import Message from "./message";

type MultiMessagesPropType = {
  messages: { id: number; name: string; text: string }[];
};

const MultiMessages: React.FC<MultiMessagesPropType> = (props) => {
  return (
    <div className="inline-flex flex-col-reverse justify-center items-start  ">
      {props.messages.map((message) => {
        return (
          <Message key={message.id} name={message.name} text={message.text} />
        );
      })}
    </div>
  );
};

export default MultiMessages;
