import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export const middleware = async (req: any) => {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: req, res: res });

  await supabase.auth.getSession();
  return res;
};
