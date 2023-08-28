import Image from "next/image";
import Link from "next/link";
import DojoLogo from "../../public/images/dojo-logo.png";
import React from "react";
import LogoutButton from "./LogoutButton";

interface INavbar {
  user: any;
}
const Navbar: React.FC<INavbar> = ({ user }) => {
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
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      {user && <LogoutButton />}
    </nav>
  );
};

export default Navbar;
