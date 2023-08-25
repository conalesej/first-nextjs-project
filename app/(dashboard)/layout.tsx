import React, { ReactNode } from "react";
import { Navbar } from "../components";

interface IDashboardLayout {
  children: ReactNode;
}
const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashboardLayout;
