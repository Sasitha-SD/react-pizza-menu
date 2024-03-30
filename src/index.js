import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data';







function App(){
  return( 
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>   

  )
}

function Header() {

  return (
    <div>
      <h1> Fast React Pizza Co.</h1>
    </div>
  )
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

function Footer(){
  // const hour = new Date().getHours();
  // const openHour = 8;
  // const closeHour = 22;

  // if(hour >= openHour && hour <= closeHour) alert ('we currently open'); 
  // else alert ("Sorry we are closed")

  return( 
    <footer>
      {new Date().toLocaleTimeString()}.We are currently open
      </footer>
  
  );
}

function Pizza ( ){
  return (
  <div> 
    <img src='pizzas/spinaci.jpg' alt='pizza'></img>
    <h2>Pizza Spinaci</h2>
    <p>Tomato, mozarella, spinach, and ricotta cheese</p>
  </div>  
);

}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals