import React, { useState } from 'react'
import "./App.css"
import Nav from './components/Nav'
import Header from './components/Header'
import Article from './components/Article'
import Hero from './components/Hero'
import Aside from './components/Aside'
import Section from './components/Section'
import Wrapper from './components/Wrapper'
import VisitSection from './components/VisitSection'
import Footer from './components/Footer'

const App = () => {
  const [cart, setCart] = useState([]);

  // Savatga mahsulot qo'shish
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Savatdan mahsulotni o'chirish
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Savatdagi mahsulot miqdorini oshirish/kamaytirish (+ / -)
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <>
      <Nav 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
      <Header />
      <Article addToCart={addToCart} />
      <Hero addToCart={addToCart} />
      <Aside addToCart={addToCart} />
      <Section addToCart={addToCart} />
      <Wrapper addToCart={addToCart} />
      <VisitSection />
      <Footer />
    </>
  )
}

export default App