import { ITickets } from "@/app/utils/types";
import React from "react";

interface ITicketDetails {
  params: { id: number };
}

const getTicket = async (id: number) => {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 30, //  use 0 to opt out of using cache
    },
  });
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
