/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import { pizzaData } from "/public/data"
import "./index.css"

// kad napisem React.createElement() dobijem error React not defined. pojasnit
// kad napisem ' u <footer> dobijem bude crveno ali nema errora - can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.eslintreact/no-unescaped-entities
// zasto ne mozemo koristit if else? zasto ternary operator daje neki value, a if else ne?

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

function Pizza(props) {
  console.log(props)
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
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
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later</p>
      )}




      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach and ricotta cheese"
        photoName="public/pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="public/pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we are closed")
  // return React.createElement("footer", null, "We're currently open")
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
      )}
      {/* {new Date().toLocaleTimeString()}. We are currently open */}
    </footer>
  );
}


export default App
