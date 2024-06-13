import { useEffect, useState } from "react";
import "./App.css";
import Forms from "./Forms";
import Calendar from "./Calendar";

function App() {
  const [count, setCount] = useState(0);
  const [client, setClient] = useState(null);
  useEffect(() => {
    async function getClientData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      setClient(data[0]);
    }

    getClientData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {client ? client.name : "Hello world"}
      </h1>
      <Forms />
      <Calendar />
    </div>
  );
}

export default App;
