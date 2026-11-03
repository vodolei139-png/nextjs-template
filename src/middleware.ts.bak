import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Базовые заголовки безопасности
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Content Security Policy (CSP)
  // 'self' — разрешает скрипты и стили только из своего домена
  // 'unsafe-inline' для стилей нужен, если у тебя есть инлайн-стили (часто бывает с Tailwind)
  // data: для base64 картинок (если Tailwind генерирует их)
  // img-src 'self' data: для твоих фото спотов
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self';
     script-src 'self' 'unsafe-inline' 'unsafe-eval';
     style-src 'self' 'unsafe-inline' data:;
     img-src 'self' data: https:;
     font-src 'self' https:;
     connect-src 'self' https:;
     frame-src 'self' https:;
     object-src 'none';
     base-uri 'self';
     form-action 'self';
     frame-ancestors 'none';
     block-all-mixed-content`,
  );

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
