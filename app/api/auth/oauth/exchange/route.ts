import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient, setAuthCookies } from '@insforge/sdk/ssr';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('insforge_code');
  const errorParam = url.searchParams.get('error');

  const loginUrl = new URL('/login', request.url);

  if (errorParam || !code) {
    loginUrl.searchParams.set('error', 'oauth_failed');
    return NextResponse.redirect(loginUrl);
  }

  const codeVerifier = request.cookies.get('insforge_oauth_verifier')?.value;
  if (!codeVerifier) {
    loginUrl.searchParams.set('error', 'verifier_missing');
    return NextResponse.redirect(loginUrl);
  }

  const insforge = createServerClient();
  const { data, error } = await insforge.auth.exchangeOAuthCode(code, codeVerifier);

  if (error || !data?.accessToken) {
    loginUrl.searchParams.set('error', 'exchange_failed');
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.redirect(new URL('/dashboard', request.url));

  setAuthCookies(response.cookies, {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  });

  response.cookies.delete('insforge_oauth_verifier');

  return response;
}
