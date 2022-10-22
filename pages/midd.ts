// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// import { isPublicRoute, isAdminRoute } from "utils/auth/isRoute";
// import { AUTH_LOGIN_ROUTE } from "utils/auth/routes";
//
// export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
//   // const { pathname } = req.nextUrl;
//   //
//   // if (!pathname.includes("static")) {
//   //   const isPublic = isPublicRoute(pathname);
//   //   const isAdmin = isAdminRoute(pathname);
//   //
//   //   if (isPublic) {
//   //     return NextResponse.next();
//   //   }
//   //
//   //   const refreshToken = req.cookies.refreshToken;
//   //
//   //   if (!refreshToken) {
//   //     return NextResponse.redirect("http://127.0.0.1:3000" + AUTH_LOGIN_ROUTE);
//   //   }
//   //
//   //   const isValidToken = await fetch("http://127.0.0.1:5000/api/auth/isValid", {
//   //     method: "GET",
//   //     headers: {
//   //       cookie: `refreshToken=${refreshToken}`,
//   //     },
//   //   }).then((response) => {
//   //     return response.json();
//   //   });
//   //
//   //   if (!isValidToken) {
//   //     let res = NextResponse.redirect(
//   //       "http://127.0.0.1:3000" + AUTH_LOGIN_ROUTE
//   //     );
//   //     return res.clearCookie("refreshToken");
//   //   }
//   //
//   //   if (isAdmin) {
//   //     const isAdminToken = await fetch(
//   //       "http://127.0.0.1:5000/api/auth/isAdmin",
//   //       {
//   //         method: "GET",
//   //         headers: {
//   //           cookie: `refreshToken=${refreshToken}`,
//   //         },
//   //       }
//   //     ).then((response) => {
//   //       return response.json();
//   //     });
//   //
//   //     if (!isAdminToken) {
//   //       return NextResponse.redirect("http://127.0.0.1:3000");
//   //     }
//   //   }
//   //
//   //   return NextResponse.next();
//   }
// }
