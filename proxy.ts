import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@insforge/sdk/ssr';

export async function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });

  const { accessToken } = await updateSession({
    requestCookies: {
      get: (name) => request.cookies.get(name)?.value,
    },
    responseCookies: {
      get: (name) => response.cookies.get(name)?.value,
      set: (nameOrOpts, value?, options?) => {
        if (typeof nameOrOpts === 'string') {
          response.cookies.set(nameOrOpts, value as string, options as never);
        } else {
          response.cookies.set(nameOrOpts.name, nameOrOpts.value, nameOrOpts as never);
        }
      },
      delete: (nameOrOpts) => {
        if (typeof nameOrOpts === 'string') {
          response.cookies.delete(nameOrOpts);
        } else {
          response.cookies.delete(nameOrOpts.name);
        }
      },
    },
  });

  if (!accessToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/find-jobs/:path*'],
};
