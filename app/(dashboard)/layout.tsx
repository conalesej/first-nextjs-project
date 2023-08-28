import React, { ReactNode } from "react";
import { Navbar } from "../components";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface IDashboardLayout {
  children: ReactNode;
}
const DashboardLayout: React.FC<IDashboardLayout> = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <Navbar user={data.session?.user} />
      {children}
    </>
  );
};

export default DashboardLayout;
