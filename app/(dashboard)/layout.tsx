import React, { ReactNode } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Components
import { Navbar } from "../components";

interface IDashboardLayout {
  children: ReactNode;
}
const DashboardLayout: React.FC<IDashboardLayout> = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if(!data.session){
    redirect('/login')        // Router is used in the Client/Browser whereas Redirict is used in the Server components
  }
  return (
    <>
      <Navbar user={data.session?.user} />
      {children}
    </>
  );
};

export default DashboardLayout;
