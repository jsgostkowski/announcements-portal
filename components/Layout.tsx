import React from "react";
import About from "../pages/About";
import { Navbar } from "./Navbar";
type AppLayoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
