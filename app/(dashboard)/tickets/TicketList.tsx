import React from "react";
import Link from "next/link";
import { ITicket } from "@/app/utils/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

{
  /** 
        1.  The fetch is happening in the server. By the time the component reaches in the server, it has already fetched this data.
        2.  If we fetch the resource here and any other files, it will only do it once and be re-used all over
        3.  Caches the response to any fetches we made, it uses a cached version.
    */
}

const getTickets = async () => {
  // Imitate delay by 3000s
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("tickets").select();

  if (error) console.log(error.message);
  return data as ITicket[];
};

const TicketList: React.FC = async () => {
  const tickets: ITicket[] = await getTickets();
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        );
      })}
      {!tickets.length && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};

export default TicketList;
