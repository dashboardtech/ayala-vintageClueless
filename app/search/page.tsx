'use client'

import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { retroTheme } from '../../app/styles/retro-theme'

interface ClothingItem {
  name: string;
  price: number;
  image: string;
  description: string;
}

const tops: ClothingItem[] = [
  {
    name: "Blusa Blanca Elegante",
    price: 45.99,
    image: "/blouse-1.png",
    description: "Blusa blanca con diseño elegante y versátil"
  },
  {
    name: "Blusa Azul Retro",
    price: 35.99,
    image: "/blouse-2.png",
    description: "Blusa azul con estilo retro y corte clásico"
  }
];

const bottoms: ClothingItem[] = [
  {
    name: "Falda Plaid Clásica",
    price: 49.99,
    image: "/skirt-1.png",
    description: "Falda a cuadros con diseño clásico escocés"
  },
  {
    name: "Falda Plaid Roja",
    price: 55.99,
    image: "/skirt-2.png",
    description: "Falda a cuadros en tonos rojos y negros"
  },
  {
    name: "Falda Negra Básica",
    price: 45.99,
    image: "/skirt-3.png",
    description: "Falda negra versátil para cualquier ocasión"
  }
];

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<'tops' | 'bottoms'>('tops');

  const items = selectedCategory === 'tops' ? tops : bottoms;

  return (
    <div className="min-h-screen" style={{
      fontFamily: retroTheme.fonts.system,
      background: retroTheme.colors.windowBg,
      padding: retroTheme.spacing.xl,
    }}>
      <div style={{
        background: retroTheme.colors.background,
        border: retroTheme.borders.window,
        boxShadow: retroTheme.shadows.window,
        borderRadius: retroTheme.borderRadius.md,
        padding: retroTheme.spacing.lg,
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <header style={{
          background: retroTheme.colors.titleBarBg,
          padding: retroTheme.spacing.md,
          marginBottom: retroTheme.spacing.lg,
          borderRadius: `${retroTheme.borderRadius.md} ${retroTheme.borderRadius.md} 0 0`,
          marginLeft: '-24px',
          marginRight: '-24px',
          marginTop: '-24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              padding: retroTheme.spacing.sm,
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold text-center text-white flex-1">
            Buscar por Categoría
          </h1>
          <div style={{ width: '40px' }}></div>
        </header>

        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setSelectedCategory('tops')}
            style={{
              ...retroTheme.borders,
              background: selectedCategory === 'tops' ? retroTheme.colors.accent : retroTheme.colors.buttonBg,
              boxShadow: retroTheme.shadows.button,
              padding: `${retroTheme.spacing.sm} ${retroTheme.spacing.lg}`,
              color: selectedCategory === 'tops' ? retroTheme.colors.buttonBg : retroTheme.colors.accent,
              fontFamily: retroTheme.fonts.system,
              transition: retroTheme.transitions.default,
            }}
          >
            Parte Superior
          </button>
          <button
            onClick={() => setSelectedCategory('bottoms')}
            style={{
              ...retroTheme.borders,
              background: selectedCategory === 'bottoms' ? retroTheme.colors.accent : retroTheme.colors.buttonBg,
              boxShadow: retroTheme.shadows.button,
              padding: `${retroTheme.spacing.sm} ${retroTheme.spacing.lg}`,
              color: selectedCategory === 'bottoms' ? retroTheme.colors.buttonBg : retroTheme.colors.accent,
              fontFamily: retroTheme.fonts.system,
              transition: retroTheme.transitions.default,
            }}
          >
            Parte Inferior
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background: retroTheme.colors.background,
                border: retroTheme.borders.window,
                boxShadow: retroTheme.shadows.window,
                borderRadius: retroTheme.borderRadius.sm,
                padding: retroTheme.spacing.md,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                height: '300px',
                marginBottom: retroTheme.spacing.md,
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div style={{ color: retroTheme.colors.accent }}>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm mb-2">{item.description}</p>
                <p className="font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
