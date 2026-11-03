"use client";

export function SiteUser() {
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="font-bold text-lg">Профиль пользователя</h3>
      <p className="text-sm text-gray-600 mt-1">Здесь будет аватар и имя</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm">
        Войти
      </button>
    </div>
  );
}
