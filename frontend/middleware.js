import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const cookie = req.cookies.get("access_token");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
};

// Config to match all routes that start with /admin/
export const config = {
  matcher: ["/admin/:path*"],
};
