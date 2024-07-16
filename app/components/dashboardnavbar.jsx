import Link from "next/link"
import Logo from "./logo"

export default function DashboardNavbar() {
  return (
    <nav>
      <Logo />
      <Link href="/">
        <h1>Jedi Help Desk</h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create Ticket</Link>
    </nav>
  );
}
