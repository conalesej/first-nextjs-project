import React from "react";
import { ITickets } from "../utils/types";

{
  /** 
        1.  The fetch is happening in the server. By the time the component reaches in the server, it has already fetched this data.
        2.  If we fetch the resource here and any other files, it will only do it once and be re-used all over
        3.  Caches the response to any fetches we made, it uses a cached version.
    */
}

const getTickets = async () => {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 30, //  use 0 to opt out of using cache
    },
  });
  return res.json();
};

const TicketList = async () => {
  const tickets: ITickets[] = await getTickets();

  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
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
