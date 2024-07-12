import Link from "next/link";
import AuthNavbar from "../components/authnavbar";

export default function AuthLayout({children}) {
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}
