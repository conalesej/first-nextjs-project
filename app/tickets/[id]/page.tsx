import { ITickets } from "@/app/utils/types";
import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = false; // if(false) Returns a 404 page if an id hasn't been pre-rendered before OTHERWISE Next js will refetch this shit

export const generateStaticParams = async () => {
  {
    /** 
    If the revalidate is set to 0 -> Then this will be useless because this is set to the cache
  */
  }

  const res = await fetch("http://localhost:4000/tickets/");
  const tickets: ITickets[] = await res.json();

  const ticketsId = tickets.map((ticket) => ({ id: ticket.id }));

  // [{id: 1}, {id: 2}, {id: 3}, ...]
  return ticketsId;
};

interface ITicketDetails {
  params: { id: number };
}

const getTicket = async (id: number) => {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 30, //  use 0 to opt out of using cache
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
};
const TicketDetails: React.FC<ITicketDetails> = async ({ params }) => {
  const { id } = params;
  const ticket: ITickets = await getTicket(id);

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
