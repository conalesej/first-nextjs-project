import Image from "next/image";
import Link from "next/link";
import DojoLogo from "../../public/images/dojo-logo.png";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Image
        alt="Dojo Helpdesk Logo"
        src={DojoLogo}
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1 className="text-4xl">Ticketing Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
