import React from "react";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
