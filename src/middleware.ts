import { NextResponse } from 'next/server';

export function middleware(request: Request) {

  const url = new URL(request.url);

  if (url.hostname === 'nathanmcginnis.com') {
    url.hostname = 'nathanmcginnis.dev';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
