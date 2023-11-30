import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import './variables.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';
import CartItem from './components/CartItem';

function App() {
  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);
  //함수를 props로 넘겨줄때 부모에서 함수가 정의되어있어야한다.
  const addCartItems = (cartItems) => {
    setCartItems(cartItems);
  }

  return (
    <Router>
      <Nav items={cartItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer
          items={items}
          cartItems={cartItems}
          //1. setCartItems도 넘겨야함 굳이 정의된 함수일필요가 없음!
          //함수를 props로 넘겨줄때 부모에서 함수가 정의되어있어야한다. <-아님
          addCartItems={addCartItems} />} />
        <Route
          path="/shoppingcart"
          element={<ShoppingCart
            cartItems={cartItems}
            //1. setCartItems도 넘겨야함
            items={items}
            deleteCartItems={addCartItems} />}
        />
      </Routes>
      <img
        id="logo_foot"
        src={`${process.env.PUBLIC_URL}/codestates-logo.png`}
        alt="logo_foot"
      />
    </Router>
  );
}

export default App;
