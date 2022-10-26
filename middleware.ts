import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware: ", request.nextUrl.pathname);
  // Access only with cookie set
  if (request.nextUrl.pathname.startsWith("/protected")) {
    const cookie = request.cookies.get("auth");
    if (cookie !== "authenticated") {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  // Redirect Login to Home if cookie is already set
  if (request.nextUrl.pathname.startsWith("/login")) {
    const cookie = request.cookies.get("auth");
    if (cookie === "authenticated") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/protected", "/login"],
};
