import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Any router handler that is declared in this file will be dynamic and not static (cached)

export const GET = async () => {
  try {
    const res = await fetch("http://localhost:4000/tickets", {
      next: { revalidate: 0 }, // So it would not be cached
    });
    const tickets = await res.json();
    return NextResponse.json(tickets, {
      status: 200,
    });
  } catch (e) {
    const _ = undefined;
    return NextResponse.json(_, { status: 400 });
  }
};
