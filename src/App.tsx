import React, { useState } from 'react';
import './App.css';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import apiLessThan10 from './abaixo-10-reais.json';
import apiMoreThan10 from './acima-10-reais.json';

function App() {

  // const fakeAPI = apiLessThan10;
  const fakeAPI = apiMoreThan10;

  const response = useState(fakeAPI);

  return (
    <main className="container">
      <header className="header">
        <h2>Meu carrinho</h2>
      </header>
      <div className="content">
        <CartItems response={response[0]} />
      </div>
      <div className="total">
        <CartTotal response={response[0]} />
      </div>
      <footer className="footer">
        <button>Finalizar compra</button>
      </footer>
    </main>
  );
}

export default App;
