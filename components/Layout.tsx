import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
type AppLayoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};
