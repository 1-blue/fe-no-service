import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();

  // redirect 테스트
  if (req.nextUrl.pathname.startsWith("/test/middleware/redirect")) {
    console.log("🚀 >> /test/middleware/redirect >> /로 리다이렉트");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // rewrite 테스트
  if (req.nextUrl.pathname.startsWith("/test/middleware/rewrite")) {
    console.log(
      "🚀 >> /test/middleware/rewrite >> 브라우저의 경로는 그대로지만 /로 이동"
    );
    return NextResponse.rewrite(new URL("/", req.url));
  }

  // [GET] cookie 테스트
  if (req.nextUrl.pathname.startsWith("/test/middleware/get-cookie")) {
    const cookie = req.cookies.getAll();
    console.log("🚀 cookie >> ", cookie);
  }
  // [SET] cookie 테스트
  if (req.nextUrl.pathname.startsWith("/test/middleware/set-cookie")) {
    // Set-Cookie:madeInKr=newjeans;path=/;httpOnly=true
    response.cookies.set({
      name: "madeInKr",
      value: "newjeans",
      /** 쿠키 관련 설정 가능 */
      path: "/",
      httpOnly: true,
    });

    return response;
  }

  // header 테스트
  if (req.nextUrl.pathname.startsWith("/test/middleware/header")) {
    response.headers.set("made-in-pse", "custom-header");

    return response;
  }
}

export const config = {
  /** 미들웨어 실행 경로 지정 */
  matcher: [
    /**`API`, `_next/static`, `_next/image`, `favicon.ico` 제외 ( [공식문서](https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher) ) */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
