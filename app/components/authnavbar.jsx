import Link from "next/link";
import Logo from "./logo";

export default function AuthNavbar() {
  return (
    <nav>
      <Logo />
      <h1>Jedi Help Desk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
    </nav>
  );
}
