import { Gallery } from "@/components/surf/gallery";
import { Hero } from "@/components/surf/hero";
import { SiteFooter } from "@/components/surf/site-footer";
import { SiteHeader } from "@/components/surf/site-header";
export default function IndexPage() {
  return (
    <main style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1a1a1a' }}>
        Сайт работает! 🎉
      </h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        Middleware временно отключен или вызывает ошибку. 
        Это тестовая страница, чтобы подтвердить, что сервер Next.js работает.
      </p>
      <p style={{ color: '#555', marginTop: '2rem', fontSize: '0.9rem' }}>
        Ошибка была: 500 MIDDLEWARE_INVOCATION_FAILED
      </p>
    </main>
  );
}

