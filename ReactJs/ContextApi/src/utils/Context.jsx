import { createContext, useState } from "react";
export const userContext = createContext();
const Context = (props) => {
  const [user, setUser] = useState([
    {id:1, Username:"John", city:"New York"},
    {id:2, Username:"Jane", city:"Los Angeles"},
    {id:3, Username:"Jim", city:"Chicago"},
  ]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  )
}

export default Context