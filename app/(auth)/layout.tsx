import React, { ReactNode } from "react";
import Link from "next/link";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IAuthLayout {
  children: ReactNode;
}
const AuthLayout: React.FC<IAuthLayout> = async({ children }) => {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if(data.session){
    redirect('/')        // Router is used in the Client/Browser whereas Redirict is used in the Server components
  }
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
