import { useState } from 'react'
import './App.css'
import { pizzaData } from "/public/data"
import "./index.css"

// kad napisem React.createElement() dobijem error React not defined. pojasnit
// kad napisem ' u <footer> dobijem bude crveno ali nema errora - can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.eslintreact/no-unescaped-entities

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  )
}

function Pizza() {
  return (
    <div>
      <img src="/public/pizzas/focaccia.jpg" alt="Pizza focaccia" />
      <h3>{pizzaData[0].name}</h3>
      <p>{pizzaData[0].ingredients}</p>
    </div>
  )
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase"};
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
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
  return <footer className="footer">{new Date().toLocaleTimeString()}. We are currently open</footer>
}


export default App
