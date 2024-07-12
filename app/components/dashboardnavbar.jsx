import Link from "next/link"
import Logo from "./logo"

export default function DashboardNavbar() {
  return (
    <nav>
      <Logo />
        <h1>Jedi Help Desk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create Ticket</Link>
      </nav>
  )
}
