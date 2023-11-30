import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

  const state = useSelector(state => state.itemReducer);
  //nav말고 header라고 하자
  return (
    <div id="nav-body">
      <div id="title">
        {/* span 안에 img가 들어갈 수 없다 */}
        <img id="logo" src="../logo.png" alt="logo" />
        <h1 id="name">CMarket</h1>
      </div>
      <nav id="menu">
        <Link to="/">상품리스트</Link>
        <Link to="/shoppingcart">
          장바구니<span id="nav-item-counter">{state.cartItems.length}</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
