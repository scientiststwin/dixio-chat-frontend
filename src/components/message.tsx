type MessagePropsType = {
  name: string;
  text: string;
};

const Message: React.FC<MessagePropsType> = (props) => {
  return (
    <div className="inline-flex flex-col justify-center items-start py-4 px-2 bg-gray-100 m-2 rounded">
      <h4 className="text-indigo-700"> {props.name} </h4>
      <p> {props.text} </p>
    </div>
  );
};

export default Message;
