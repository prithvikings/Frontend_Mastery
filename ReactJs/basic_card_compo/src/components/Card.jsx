import React from "react";

function Card() {
  var data = [
    {
      Image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum necessitatibus repellendus cupiditate blanditiis quaerat ut error enim veritatis autem?",
      Instock: false,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum necessitatibus repellendus cupiditate blanditiis quaerat ut error enim veritatis autem?",
      Instock: false,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum necessitatibus repellendus cupiditate blanditiis quaerat ut error enim veritatis autem?",
      Instock: true,
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 relative flex items-center justify-center gap-10">
      {data.map((elem, index) => {
        return (
          <div
            key={index}
            className="w-52 bg-zinc-100 rounded-md overflow-hidden"
          >
            <div className="w-full h-32 bg-zinc-300">
              <img
                className="w-full h-full object-cover"
                src={elem.Image}
                alt="image"
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{elem.name} </h2>
              <p className="text-xs mt-5 text-gray-600">{elem.description} </p>
              <button className={`px-4 py-1 text-xs rounded-md text-zinc-100 mt-3 ${elem.Instock ? 'bg-sky-700': 'bg-red-500'}`}>{elem.Instock ? "Instock": "Out of Stock"}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
