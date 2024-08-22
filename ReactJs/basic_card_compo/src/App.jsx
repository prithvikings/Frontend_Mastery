import { useState } from "react";
import Props_Assignment from "./components/Props_Assignment";

function App() {
  const data = [
    {
      name: "John",
      Profession: "Painter",
      image: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
    {
      name: "Amit",
      Profession: "Coder",
      image: "https://images.unsplash.com/photo-1676490218457-479de62cb990?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
    {
      name: "Rohit",
      Profession: "Berojgar",
      image: "https://images.unsplash.com/photo-1618306842557-a2515acf2112?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
    {
      name: "JethaLal",
      Profession: "BusinessMen",
      image: "https://images.unsplash.com/photo-1661370343739-b26f0bb72dbf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Friend: false,
    },
  ];

  const [realdata, setdata] = useState(data);

  const handleFriendsButton = (index) => {
    setdata((previous) =>
      previous.map((item, i) => {
        if (i === index) {
          return { ...item, Friend: !item.Friend }; // Toggle the Friend status
        }
        return item;
      })
    );
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {realdata.map((item, index) => (
        <Props_Assignment
          dummy={handleFriendsButton}
          index={index}
          key={index}
          name={item.name}
          image={item.image}
          Profession={item.Profession}
          Friend={item.Friend}
        />
      ))}
    </div>
  );
}

export default App;
