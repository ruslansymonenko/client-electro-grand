/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from '@/services/auth/auth-token.service';
import { ADMIN_URL, PRIVATE_URL, PUBLIC_URL } from '@/config/url.config';
import Cookies from 'js-cookie';

export async function middleware(request: NextRequest) {
  const refreshToken: string | undefined = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
  const adminToken: string | undefined = request.cookies.get(EnumTokens.ADMIN_TOKEN)?.value;
  const url: string = request.url;

  const isAuthPage: boolean =
    url.includes(PUBLIC_URL.registration()) || url.includes(PUBLIC_URL.login());

  const isAdminPage: boolean = url.includes(ADMIN_URL.admin());

  if (isAuthPage) {
    if (refreshToken) {
      return NextResponse.redirect(new URL(PRIVATE_URL.customer(), url));
    }

    return NextResponse.next();
  }

  if (refreshToken === undefined) {
    return NextResponse.redirect(new URL(PUBLIC_URL.login(), url));
  }

  if (!isAdminPage) {
    if (refreshToken) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(PUBLIC_URL.login(), url));
    }
  }

  if (isAdminPage && adminToken) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: adminToken }),
      });

      const result = await response.json();

      if (!result.valid) {
        return NextResponse.redirect(new URL(PUBLIC_URL.noAccess(), url));
      }

      Cookies.set('admin', 'true', { expires: 1 });
      return NextResponse.next();
    } catch (error) {
      Cookies.set('admin', 'false');
      return NextResponse.redirect(new URL(PUBLIC_URL.noAccess(), url));
    }
  } else {
    return NextResponse.redirect(new URL(PUBLIC_URL.main(), url));
  }
}

export const config = {
  matcher: [
    '/customer/:path*',
    '/auth/login',
    '/auth/login-staff',
    '/auth/register',
    '/admin/:path*',
  ],
};
