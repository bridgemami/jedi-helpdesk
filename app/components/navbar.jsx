import Link from "next/link"
import Image from "next/image"
import Logo from "./jedi_logo.png"

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt='Jedi Helpdesk Logo'
      width={100}
      quality={100}
      placeholder="blur"
      />
        <h1>Jedi Help Desk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
  )
}
