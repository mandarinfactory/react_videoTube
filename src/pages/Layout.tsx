import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout: React.FC<{ children: ReactNode }>  = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 justify-center dark:bg-neutral-900 dark:text-white">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
