"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addTicket = async (formData: FormData) => {
  const ticket = Object.fromEntries(formData);
  const supabase = createServerActionClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //    insert data
  const { error } = await supabase
    // .from("tickets")
    .from("ticketssszxczxc")
    .insert({ ...ticket, user_email: session?.user.email });

  if (error) {
    throw new Error("Cannot add ticket");
  }
  revalidatePath("/tickets");
  redirect("/tickets");
};
