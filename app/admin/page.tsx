'use client'

import React, { useState } from 'react'
import { Upload, Save, Trash2 } from 'lucide-react'
import { retroTheme } from '../../app/styles/retro-theme'

interface ClothingItem {
  name: string
  price: number
  image: string
  description: string
  category: 'tops' | 'bottoms'
}

export default function AdminPage() {
  const [items, setItems] = useState<ClothingItem[]>([])
  const [newItem, setNewItem] = useState<Partial<ClothingItem>>({
    category: 'tops'
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewItem(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedImage || !newItem.name || !newItem.price || !newItem.description || !newItem.category) {
      alert('Por favor completa todos los campos')
      return
    }

    const fakeImageUrl = URL.createObjectURL(selectedImage)
    
    setItems(prev => [...prev, { ...newItem as ClothingItem, image: fakeImageUrl }])
    setNewItem({ category: 'tops' })
    setSelectedImage(null)
  }

  const inputStyle = {
    background: retroTheme.colors.background,
    border: retroTheme.borders.window,
    boxShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.2)',
    padding: '0.5rem',
    width: '100%',
    marginTop: '0.25rem',
    fontFamily: retroTheme.fonts.system,
  }

  const buttonStyle = {
    background: retroTheme.colors.buttonBg,
    border: retroTheme.borders.button,
    boxShadow: retroTheme.shadows.button,
    padding: '0.5rem 1rem',
    color: retroTheme.colors.accent,
    cursor: 'pointer',
    fontFamily: retroTheme.fonts.system,
  }

  return (
    <div className="min-h-screen" style={{
      fontFamily: retroTheme.fonts.system,
      background: retroTheme.colors.windowBg,
    }}>
      <div className="container mx-auto px-4 py-8">
        <header style={{
          background: retroTheme.colors.titleBarBg,
          border: retroTheme.borders.window,
          boxShadow: retroTheme.shadows.window,
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: '0.5rem 0.5rem 0 0',
        }}>
          <h1 className="text-3xl font-bold text-white text-center">Panel de Administración</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario para agregar items */}
          <div style={{
            background: retroTheme.colors.windowBg,
            border: retroTheme.borders.window,
            boxShadow: retroTheme.shadows.window,
            padding: '1.5rem',
            borderRadius: '0.5rem',
          }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: retroTheme.colors.accent }}>
              Agregar Nueva Prenda
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: retroTheme.colors.accent }}>
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  style={{
                    ...retroTheme.borders,
                    background: '#FFFFFF',
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1)',
                    padding: retroTheme.spacing.md,
                    width: '100%',
                    fontFamily: retroTheme.fonts.system,
                    fontSize: '1rem',
                    color: '#000000',
                    border: '2px solid black',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  value={newItem.name || ''}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: retroTheme.colors.accent }}>
                  Precio
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  required
                  style={{
                    ...retroTheme.borders,
                    background: '#FFFFFF',
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1)',
                    padding: retroTheme.spacing.md,
                    width: '100%',
                    fontFamily: retroTheme.fonts.system,
                    fontSize: '1rem',
                    color: '#000000',
                    border: '2px solid black',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  value={newItem.price || ''}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: retroTheme.colors.accent }}>
                  Descripción
                </label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  style={{
                    ...retroTheme.borders,
                    background: '#FFFFFF',
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1)',
                    padding: retroTheme.spacing.md,
                    width: '100%',
                    fontFamily: retroTheme.fonts.system,
                    fontSize: '1rem',
                    color: '#000000',
                    border: '2px solid black',
                    borderRadius: '8px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  value={newItem.description || ''}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: retroTheme.colors.accent }}>
                  Imagen
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  style={{
                    ...retroTheme.borders,
                    background: '#FFFFFF',
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1)',
                    padding: retroTheme.spacing.md,
                    width: '100%',
                    fontFamily: retroTheme.fonts.system,
                    fontSize: '1rem',
                    color: '#000000',
                    border: '2px solid black',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onChange={handleImageChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: retroTheme.colors.accent }}>
                  Categoría
                </label>
                <select
                  name="category"
                  required
                  style={{
                    ...retroTheme.borders,
                    background: '#FFFFFF',
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1)',
                    padding: retroTheme.spacing.md,
                    width: '100%',
                    fontFamily: retroTheme.fonts.system,
                    fontSize: '1rem',
                    color: '#000000',
                    border: '2px solid black',
                    borderRadius: '8px',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px',
                  }}
                  value={newItem.category}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="tops">Parte Superior</option>
                  <option value="bottoms">Parte Inferior</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  ...retroTheme.borders,
                  background: retroTheme.colors.buttonBg,
                  boxShadow: retroTheme.shadows.button,
                  padding: `${retroTheme.spacing.md} ${retroTheme.spacing.xl}`,
                  width: '100%',
                  color: retroTheme.colors.accent,
                  fontFamily: retroTheme.fonts.system,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  border: '2px solid black',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: retroTheme.transitions.default,
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.98)';
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
                Agregar Producto
              </button>
            </form>
          </div>

          {/* Lista de items */}
          <div style={{
            background: retroTheme.colors.windowBg,
            border: retroTheme.borders.window,
            boxShadow: retroTheme.shadows.window,
            padding: '1.5rem',
            borderRadius: '0.5rem',
          }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: retroTheme.colors.accent }}>
              Inventario Actual
            </h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  style={{
                    background: retroTheme.colors.background,
                    border: retroTheme.borders.window,
                    boxShadow: retroTheme.shadows.window,
                    padding: '1rem',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                    style={{
                      border: retroTheme.borders.window,
                      boxShadow: retroTheme.shadows.window,
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold" style={{ color: retroTheme.colors.accent }}>{item.name}</h3>
                    <p className="text-sm" style={{ color: retroTheme.colors.accent }}>{item.description}</p>
                    <p className="text-sm font-bold" style={{ color: retroTheme.colors.accent }}>${item.price}</p>
                    <p className="text-sm" style={{ color: retroTheme.colors.accent }}>
                      Categoría: {item.category === 'tops' ? 'Parte Superior' : 'Parte Inferior'}
                    </p>
                  </div>
                  <button
                    onClick={() => setItems(items.filter((_, i) => i !== index))}
                    style={{
                      ...buttonStyle,
                      padding: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
