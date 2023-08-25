import Link from "next/link";
import React, { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}
const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
