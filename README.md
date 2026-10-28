# Surf Landing Page — Next.js 16 + React 19

Лендинг-страница для бренда «Surf» с адаптивной вёрсткой и модульной структурой компонентов.

## Решённые задачи

- Устранена ошибка `Module not found: Can't resolve './logo'`: создан компонент `Logo` в папке `src/components/view`.
- Исправлена ошибка `Encountered a script tag while rendering React component`: добавлен флаг `'use client'`, реализована проверка монтирования через `useEffect` и `useState` в `ThemeProvider`.
- Ликвидирована ошибка `Return statement is not allowed here`: структура `page.tsx` приведена к корректному виду с именованной функцией `Page`, возвращающей JSX.

## Технологии

- Next.js 16.2.1 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- next-themes

## Основные компоненты

- `SiteHeader` — шапка сайта
- `Hero` — первый экран
- `Gallery` — галерея проектов
- `Outro` — финальный блок с CTA
- `SiteFooter` — подвал сайта

## Запуск проекта

```bash
npm install
npm run dev
