import { ITicket } from "@/app/utils/types";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Any router handler that is declared in this file will be dynamic and not static (cached)

export const GET = async (_: undefined, { params }: any) => {
  try {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/tickets/${id}`);
    const tickets = await res.json();

    if (!res.ok)
      return NextResponse.json(
        { error: "Cannot find the ticket" },
        { status: 404 }
      );

    return NextResponse.json(tickets, {
      status: 200,
    });
  } catch (e) {
    const _ = undefined;
    return NextResponse.json(_, { status: 400 });
  }
};
