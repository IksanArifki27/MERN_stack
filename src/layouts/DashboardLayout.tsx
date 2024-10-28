import React from "react";
import Topbar from "../componets/Topbar";
import BottomBar from "../componets/BottomBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topbar />
      {children}
      <BottomBar />
    </div>
  );
};

export default DashboardLayout;
