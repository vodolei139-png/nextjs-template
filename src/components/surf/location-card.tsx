"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Waves,
  Wind,
  X,
} from "lucide-react";

import type { SurfLocation } from "@/lib/gallery-data";

type LocationCardProps = {
  location: SurfLocation;
  index: number;
};

export function LocationCard({ location, index }: LocationCardProps) {
  // Управление модальным окном на чистом React
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          borderRadius: '24px', // Скругление, чтобы карточка читалась как отдельный блок
          boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Фоновое изображение на весь экран */}
        <img
          src={location.image}
          alt={location.imageAlt}
          loading={index === 0 ? 'eager' : 'lazy'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.7)',
          }}
        />

        {/* Градиентная подложка для читаемости текста */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60%',
            background: 'linear-gradient(to top, #0f172a 0%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* Контент поверх картинки */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '4rem 2rem',
            maxWidth: '800px',
            width: '100%',
          }}
        >
          {/* Бейдж уровня сложности */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.2)',
              marginBottom: '1.5rem',
              display: 'inline-block',
            }}
          >
            {location.level}
          </div>

          <h2
            style={{
              margin: '0 0 0.5rem 0',
              color: '#fff',
              fontSize: '3.5rem',
              lineHeight: '1.1',
              textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            }}
          >
            {location.name}
          </h2>

          <p
            style={{
              margin: '0 0 2rem 0',
              color: '#94a3b8',
              fontSize: '1.25rem',
              maxWidth: '600px',
              lineHeight: '1.6',
            }}
          >
            {location.region} • {location.ocean}
          </p>

          {/* Характеристики */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '600px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <MapPin size={16} /> <span>{location.coords}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <CalendarDays size={16} /> <span>{location.season}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <Waves size={16} /> <span>{location.waveType}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <Wind size={16} /> <span>Ветер: переменный</span>
            </div>
          </div>

          {/* Кнопка — открывает наше собственное модальное окно */}
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Узнать подробнее <ArrowUpRight size={20} />
          </button>
        </div>
      </article>

      {/* ===== МОДАЛЬНОЕ ОКНО (чистый React, без библиотек) ===== */}
      {isModalOpen && (
        <div
          onClick={closeModal} // Клик по тёмному фону закрывает окно
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Клик внутри окна НЕ закрывает его
            style={{
              backgroundColor: '#1e293b',
              color: '#f8fafc',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            }}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', color: '#fff' }}>
              {location.name}
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
              {location.region} • {location.ocean}
            </p>

            <img
              src={location.image}
              alt={location.imageAlt}
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '12px',
                objectFit: 'cover',
                marginBottom: '1.5rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
              }}
            />

            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {location.description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Сезон</p>
                <p style={{ fontWeight: '600', color: '#fff' }}>{location.season}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Уровень</p>
                <p style={{ fontWeight: '600', color: '#fff' }}>{location.level}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Тип волны</p>
                <p style={{ fontWeight: '600', color: '#fff' }}>{location.waveType}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Координаты</p>
                <p style={{ fontWeight: '600', color: '#fff' }}>{location.coords}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
