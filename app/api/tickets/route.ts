import { ITicket } from "@/app/utils/types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Any router handler that is declared in this file will be dynamic and not static (cached)

// export const GET = async () => {
//   try {
//     const res = await fetch("http://localhost:4000/tickets", {
//     //   next: { revalidate: 0 }, // So it would not be cached
//     });
//     const tickets = await res.json();
//     return NextResponse.json(tickets, {
//       status: 200,
//     });
//   } catch (e) {
//     const _ = undefined;
//     return NextResponse.json(_, { status: 400 });
//   }
// };

export const POST = async (request: any) => {
  try {
    const ticket: ITicket = await request.json();

    // get the supabase instance
    const supabase = createRouteHandlerClient({ cookies });

    // get the current user session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // insert the data
    const { data, error } = await supabase
      .from("tickets")
      .insert({
        ...ticket,
        user_email: session?.user.email,
      })
      .select()
      .single();
    return NextResponse.json({ data, error });
  } catch (e) {
    const _ = undefined;
    return NextResponse.json(_, { status: 400 });
  }
};
