import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className=" min-h-screen sm:ml-0 sm:mt-3 container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by RoadsideCoder
      </div>
    </div>
  );
};

export default AppLayout;