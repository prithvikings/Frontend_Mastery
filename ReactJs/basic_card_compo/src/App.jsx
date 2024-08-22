import { useState } from "react";
import Advance_Props from "./components/Advance_Props";
import Navbar from "./components/Navbar";

function App() {

  const data =[
    {image:"https://plus.unsplash.com/premium_photo-1682125486166-0b6d86c19fce?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Kun Faya",artist:"Mohit Chauhan",added:false},
    {image:"https://images.unsplash.com/photo-1666384630916-a7d0c3905a15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Dekhte Dekhte",artist:"Atif Aslam",added:false},
    {image:"https://images.unsplash.com/photo-1580130601254-05fa235abeab?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Apna Bana Le",artist:"Arjit Singh",added:false},
    {image:"https://images.unsplash.com/photo-1580130544326-80fc93876841?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Yo Yo Honey Singh",artist:"Dope Shop",added:false},
    {image:"https://images.unsplash.com/photo-1571847140471-1d7766e825ea?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Diljit Dosanjh",artist:"GOAT",added:true},
    {image:"https://images.unsplash.com/photo-1580130544346-77d05d03d742?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"King Shit",artist:"Shubh",added:false},
    {image:"https://images.unsplash.com/photo-1580130579792-c4f6ce908069?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Brown Munde",artist:"Ap Dhillon",added:false},
  ]
  const [songData,SetSongData]=useState(data);
  const handleClick=(index)=>{
    SetSongData((prev)=>{
      return prev.map((item,i)=>{
        if(i===index)
          return {...item,added:!item.added};
        return item;
    })
  })
  }
  return (
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData}/>
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
      {songData.map((items,index)=>{
        return(
          <Advance_Props 
            image={items.image}
            name={items.name}
            artist={items.artist}
            added={items.added}
            handleClick={handleClick}
            key={index}
            index={index}
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
