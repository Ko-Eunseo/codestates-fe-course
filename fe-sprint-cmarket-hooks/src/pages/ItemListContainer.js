import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, cartItems, addCartItems }) {
  //[상품 장바구니에 추가]
  //3. 핸들클릭 item.js로 내려가는 함수 만들기
  //itemId가져와서 사용. event는 가져오지 않아도 됨
  const handleClick = (event, itemId) => {
    const filteredItem = items.find(el => el.id === itemId);
    //console.log(filteredItem.id === cartItems[0].itemId)
    if (!cartItems.find((el) => el.itemId === itemId)) {
      const newCartItems = [{ itemId: filteredItem.id, quantity: 1 }, ...cartItems]
      addCartItems(newCartItems);
    }
    // //장바구니에 이미 있는지 없는지 확인
    // const found = cartItems.filter(el => el.itemId === itemId)[0];
    // //있으면 아무것도 안함
    // //없으면 장바구니에 추가
    // if(found === undefined) { 
    //   setCartItmes([...cartItems, {"itemId": itemId, "quantity": 1}])
    // }
  }

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
