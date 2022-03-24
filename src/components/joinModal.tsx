import React, { useState } from "react";

type JoinPropsType = {
  joinChat: (name: string) => void;
};

const JoinModal: React.FC<JoinPropsType> = (props) => {
  const [name, setName] = useState<string>("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
  };

  const onClickHandler = () => {
    console.log("name -> ", name);
    props.joinChat(name);
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center bg-slate-200 bg-transparent ">
      <div className="flex flex-col items-center space-y-8 object-center bg-slate-50 px-24 py-12">
        <div className="font-bold text-xl text-indigo-500">
          Hello! Please indicate your name:
        </div>
        <input
          onChange={onNameChange}
          type="text"
          className="outline-none border-2 rounded focus:border-indigo-700 p-2"
          placeholder="Enter your name"
        />
        <button
          onClick={onClickHandler}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinModal;
