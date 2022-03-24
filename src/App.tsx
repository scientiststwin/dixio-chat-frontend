import { useState } from "react";
import Join from "./components/join";

function App() {
  const [name, setName] = useState<string>("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
  };

  const onJoinHandler = () => {
    console.log("name -> ", name);
  };

  return (
    <div>
      <Join onChange={onNameChange} onClick={onJoinHandler} />
    </div>
  );
}

export default App;
