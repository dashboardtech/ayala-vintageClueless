'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { retroTheme } from '../app/styles/retro-theme'

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

export default function AyalaVintage() {
  const [selectedTop, setSelectedTop] = useState(0);
  const [selectedBottom, setSelectedBottom] = useState(0);
  const [showOutfit, setShowOutfit] = useState(false);

  const handlePrevTop = () => {
    setSelectedTop((prev) => (prev - 1 + tops.length) % tops.length);
  };

  const handleNextTop = () => {
    setSelectedTop((prev) => (prev + 1) % tops.length);
  };

  const handlePrevBottom = () => {
    setSelectedBottom((prev) => (prev - 1 + bottoms.length) % bottoms.length);
  };

  const handleNextBottom = () => {
    setSelectedBottom((prev) => (prev + 1) % bottoms.length);
  };

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
        }}>
          <h1 className="text-3xl font-bold text-center text-white">
            Ayala Vintage
          </h1>
        </header>

        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          {/* Top Section */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-bold" style={{ color: retroTheme.colors.accent }}>
              Parte Superior
            </h2>
            <div style={{
              background: retroTheme.colors.background,
              border: retroTheme.borders.window,
              boxShadow: retroTheme.shadows.window,
              borderRadius: retroTheme.borderRadius.sm,
              padding: retroTheme.spacing.md,
              position: 'relative',
              height: '400px',
            }}>
              <img
                src={tops[selectedTop].image}
                alt={tops[selectedTop].name}
                className="w-full h-full object-contain"
              />
              <div className="flex justify-between items-center mb-4" style={{
                position: 'absolute',
                bottom: retroTheme.spacing.md,
                left: '0',
                right: '0',
              }}>
                <button
                  onClick={handlePrevTop}
                  style={{
                    ...retroTheme.borders,
                    background: retroTheme.colors.buttonBg,
                    boxShadow: retroTheme.shadows.button,
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    color: retroTheme.colors.accent,
                    fontFamily: retroTheme.fonts.system,
                    transition: retroTheme.transitions.default,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    border: '2px solid black',
                    cursor: 'pointer',
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                >
                  ←
                </button>
                <button
                  onClick={handleNextTop}
                  style={{
                    ...retroTheme.borders,
                    background: retroTheme.colors.buttonBg,
                    boxShadow: retroTheme.shadows.button,
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    color: retroTheme.colors.accent,
                    fontFamily: retroTheme.fonts.system,
                    transition: retroTheme.transitions.default,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    border: '2px solid black',
                    cursor: 'pointer',
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                >
                  →
                </button>
              </div>
            </div>
            <div style={{ color: retroTheme.colors.accent }}>
              <h3 className="font-bold">{tops[selectedTop].name}</h3>
              <p className="text-sm">{tops[selectedTop].description}</p>
              <p className="font-bold">${tops[selectedTop].price}</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold" style={{ color: retroTheme.colors.accent }}>
              Parte Inferior
            </h2>
            <div style={{
              background: retroTheme.colors.background,
              border: retroTheme.borders.window,
              boxShadow: retroTheme.shadows.window,
              borderRadius: retroTheme.borderRadius.sm,
              padding: retroTheme.spacing.md,
              position: 'relative',
              height: '400px',
            }}>
              <img
                src={bottoms[selectedBottom].image}
                alt={bottoms[selectedBottom].name}
                className="w-full h-full object-contain"
              />
              <div className="flex justify-between items-center mb-4" style={{
                position: 'absolute',
                bottom: retroTheme.spacing.md,
                left: '0',
                right: '0',
              }}>
                <button
                  onClick={handlePrevBottom}
                  style={{
                    ...retroTheme.borders,
                    background: retroTheme.colors.buttonBg,
                    boxShadow: retroTheme.shadows.button,
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    color: retroTheme.colors.accent,
                    fontFamily: retroTheme.fonts.system,
                    transition: retroTheme.transitions.default,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    border: '2px solid black',
                    cursor: 'pointer',
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                >
                  ←
                </button>
                <button
                  onClick={handleNextBottom}
                  style={{
                    ...retroTheme.borders,
                    background: retroTheme.colors.buttonBg,
                    boxShadow: retroTheme.shadows.button,
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    color: retroTheme.colors.accent,
                    fontFamily: retroTheme.fonts.system,
                    transition: retroTheme.transitions.default,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    border: '2px solid black',
                    cursor: 'pointer',
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = retroTheme.shadows.button;
                  }}
                >
                  →
                </button>
              </div>
            </div>
            <div style={{ color: retroTheme.colors.accent }}>
              <h3 className="font-bold">{bottoms[selectedBottom].name}</h3>
              <p className="text-sm">{bottoms[selectedBottom].description}</p>
              <p className="font-bold">${bottoms[selectedBottom].price}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center px-4">
          <div className="text-center" style={{ width: '120px' }}>
            <button
              onClick={() => window.location.href = '/search'}
              style={{
                ...retroTheme.borders,
                background: retroTheme.colors.buttonBg,
                boxShadow: retroTheme.shadows.button,
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                color: retroTheme.colors.accent,
                fontFamily: retroTheme.fonts.system,
                transition: retroTheme.transitions.default,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
                border: '2px solid black',
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginBottom: '8px' }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Buscar
            </button>
          </div>

          <div className="text-center" style={{ width: '120px' }}>
            <button
              onClick={() => setShowOutfit(!showOutfit)}
              style={{
                ...retroTheme.borders,
                background: retroTheme.colors.buttonBg,
                boxShadow: retroTheme.shadows.button,
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                color: retroTheme.colors.accent,
                fontFamily: retroTheme.fonts.system,
                transition: retroTheme.transitions.default,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
                border: '2px solid black',
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginBottom: '8px' }}
              >
                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"></path>
              </svg>
              {showOutfit ? 'Ocultar' : '¡Vísteme!'}
            </button>
          </div>
        </div>

        {showOutfit && (
          <div className="mt-8" style={{
            background: retroTheme.colors.background,
            border: retroTheme.borders.window,
            boxShadow: retroTheme.shadows.window,
            borderRadius: retroTheme.borderRadius.md,
            padding: retroTheme.spacing.lg,
          }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: retroTheme.colors.accent }}>
              ¡Tu Outfit Completo!
            </h2>
            <div className="flex justify-center">
              <div style={{
                position: 'relative',
                width: '400px',
                height: '600px',
                background: retroTheme.colors.background,
                border: retroTheme.borders.window,
                boxShadow: retroTheme.shadows.window,
                borderRadius: retroTheme.borderRadius.sm,
                padding: retroTheme.spacing.md,
              }}>
                {/* Top Image */}
                <img
                  src={tops[selectedTop].image}
                  alt={tops[selectedTop].name}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '60%',
                    objectFit: 'contain',
                    zIndex: 2,
                  }}
                />
                {/* Bottom Image */}
                <img
                  src={bottoms[selectedBottom].image}
                  alt={bottoms[selectedBottom].name}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '60%',
                    objectFit: 'contain',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div style={{ color: retroTheme.colors.accent }}>
                <p className="font-bold">{tops[selectedTop].name}</p>
                <p className="text-sm">${tops[selectedTop].price}</p>
              </div>
              <div style={{ color: retroTheme.colors.accent, textAlign: 'right' }}>
                <p className="font-bold">{bottoms[selectedBottom].name}</p>
                <p className="text-sm">${bottoms[selectedBottom].price}</p>
              </div>
            </div>
            <div className="mt-4 text-right" style={{ color: retroTheme.colors.accent }}>
              <p className="text-lg font-bold">
                Total: ${(tops[selectedTop].price + bottoms[selectedBottom].price).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
