import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await fetch("http://localhost:4000/tickets");

    const tickets = await res.json();

    return NextResponse.json(tickets, {
      status: 200,
    });
  } catch (e) {
    const _ = undefined;
    return NextResponse.json(_, { status: 400 });
  }
};
