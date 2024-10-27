import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";
const App = () => {
  return (
    <div className='p-1 container  m-auto'>
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
