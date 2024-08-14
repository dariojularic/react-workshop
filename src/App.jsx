import { useState } from 'react'
import './App.css'
import { pizzaData } from "/public/data"

// kad napisem React.createElement() dobijem error React not defined. pojasnit
// kad napisem ' u <footer> dobijem bude crveno ali nema errora - can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.eslintreact/no-unescaped-entities

function App() {

  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

function Pizza() {
  return (
    <div>
      <img src="/public/pizzas/focaccia.jpg" alt="Pizza focaccia" />
      <h2>{pizzaData[0].name}</h2>
      <p>{pizzaData[0].ingredients}</p>
    </div>
  )
}

function Header() {

  return <h1>Fast React Pizza Co.</h1>
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  else alert("Sorry, we are closed")
  // return React.createElement("footer", null, "We're currently open")
  return <footer>{new Date().toLocaleTimeString()}. We' are currently open</footer>
}


export default App
