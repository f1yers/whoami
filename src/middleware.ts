import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log("middleware is running");

  const url = new URL(request.url);

  if (url.hostname === 'nathanmcginnis.com') {
    url.hostname = 'https://nathanmcginnis.dev';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
