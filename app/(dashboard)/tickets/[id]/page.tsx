import { ITicket } from "@/app/utils/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const dynamicParams = true; // if(false) Returns a 404 page if an id hasn't been pre-rendered before OTHERWISE Next js will refetch this shit

export const generateMetadata = async ({
  params,
}: {
  params: { id: number };
}) => {
  const { id } = params;
  const supabase = createServerComponentClient({ cookies });

  const { data: ticket } = await supabase
    .from("tickets")
    .select()
    .eq("id", params.id)
    .single(); // EQ = equal

  return {
    title: `Dojo Helpdesk | ${ticket?.title || "Ticket not found"}`,
  };
};

interface ITicketDetails {
  params: { id: number };
}

const getTicket = async (id: number) => {
  // Imitate delay by 3000s
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single(); // EQ = equal

  if (!data) {
    notFound();
  }
  return data;
};
const TicketDetails: React.FC<ITicketDetails> = async ({ params }) => {
  const { id } = params;
  const ticket: ITicket = await getTicket(id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;

// export const generateStaticParams = async () => {
//   {
//     /**
//     If the revalidate is set to 0 -> Then this will be useless because this is set to the cache
//   */
//   }

//   const res = await fetch("http://localhost:4000/tickets/");
//   const tickets: ITicket[] = await res.json();

//   const ticketsId = tickets.map((ticket) => ({ id: ticket.id }));

//   // [{id: 1}, {id: 2}, {id: 3}, ...]
//   return ticketsId;
// };
