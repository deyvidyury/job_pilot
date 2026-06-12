'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerClient } from '@insforge/sdk/ssr';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export async function signInWithGoogle() {
  const insforge = createServerClient();
  const { data, error } = await insforge.auth.signInWithOAuth('google', {
    redirectTo: `${SITE_URL}/api/auth/oauth/exchange`,
    skipBrowserRedirect: true,
  });

  if (error || !data?.url || !data?.codeVerifier) {
    throw new Error('OAuth initialization failed');
  }

  const cookieStore = await cookies();
  cookieStore.set('insforge_oauth_verifier', data.codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
  });

  redirect(data.url);
}

export async function signInWithGithub() {
  const insforge = createServerClient();
  const { data, error } = await insforge.auth.signInWithOAuth('github', {
    redirectTo: `${SITE_URL}/api/auth/oauth/exchange`,
    skipBrowserRedirect: true,
  });

  if (error || !data?.url || !data?.codeVerifier) {
    throw new Error('OAuth initialization failed');
  }

  const cookieStore = await cookies();
  cookieStore.set('insforge_oauth_verifier', data.codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
  });

  redirect(data.url);
}
