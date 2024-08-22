import { useState } from "react";
import Props from "./components/props"; // Ensure the import matches the component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Props chacha="Download Now" color="bg-sky-500" />
      <Props chacha="Danger" color="bg-red-500" />
    </>
  );
}

export default App;
