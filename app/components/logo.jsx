import Link from "next/link";
import Image from "next/image";
import JediLogo from "./jedi_logo.png"
export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={JediLogo}
        alt="Jedi Helpdesk Logo"
        width={100}
        quality={100}
        placeholder="blur"
      />
    </Link>
  );
}
