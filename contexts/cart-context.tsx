"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Course } from "@/lib/types"

type CartItem = {
  course: Course
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (course: Course) => void
  removeFromCart: (courseId: string) => void
  clearCart: () => void
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (course: Course) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.course.id === course.id)
      if (existingItem) {
        return prevItems.map((item) => (item.course.id === course.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { course, quantity: 1 }]
    })
  }

  const removeFromCart = (courseId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.course.id !== courseId))
  }

  const clearCart = () => {
    setItems([])
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.course.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

