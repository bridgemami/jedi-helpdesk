import React from "react";
import DashboardNavbar from "../components/dashboardnavbar";

export const metadata = {
  title: "Jedi Help Desk | Tickets",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
}
