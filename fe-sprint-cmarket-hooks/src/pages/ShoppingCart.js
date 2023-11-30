import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart({ items, cartItems, deleteCartItems }) {
  const [checkedItems, setCheckedItems] = useState(cartItems.map((el) => el.itemId))
  const [quantities, setQuantity] = useState(1)

  const handleCheckChange = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(cartItems.map((el) => el.itemId))
    }
    else {
      setCheckedItems([]);
    }
  };
  //장바구니 상품 개수 핸들링
  // 4. 숫자가 변경되면 새로운 개수 넣어주어야함
  const handleQuantityChange = (quantity, itemId) => {
    //itemId 기준으로 분기
    const itemQuantity = cartItems.filter(el => el.itemId === itemId);
    itemQuantity[0].quantity = quantity;
    setQuantity(itemQuantity[0].quantity);
    //map 사용해서 장바구니에 들어있는 아이템을 보고 itemid와 일치하는 아이템이 있으면
    //수량을 quantity로 변경해서 리턴
    //일치하지 않으면 그대로 리턴
    // setCartItems(
    //   cartItems.map(item => {
    //     if(item.itemId === itemId) { 
    //       return {"itemId": itemId, "quantity": quantity} //새 객체 만들어 보냄
    //     } else { //map: 리턴하지 않으면 undefined가 뜸. 리턴해주어야함
    //       return item;
    //     }
    //   })
    // )
    // setCartItems(cartItems.map(item => { item.itemId === itemId ? {"itemId": itemId, "quantity": quantity} : item; }))
  }
  //5. 장바구니 상품 삭제
  const handleDelete = (itemId) => {
    setCheckedItems(checkedItems.filter((el) => el !== itemId))
    deleteCartItems(cartItems.filter((el) => el.itemId !== itemId))
    // setCartItems(cartItems.filter(item => item.itemId !== itemId))
  }

  const getTotal = () => {
    let cartIdArr = cartItems.map((el) => el.itemId)
    let total = {
      price: 0,
      quantity: 0,
    }
    for (let i = 0; i < cartIdArr.length; i++) {
      if (checkedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = cartItems[i].quantity
        let price = items.filter((el) => el.id === cartItems[i].itemId)[0].price

        total.price = total.price + quantity * price
        total.quantity = total.quantity + quantity
      }
    }
    return total
  }
  //id순으로 정렬해 들어오게 렌더링하고있음
  const renderItems = items.filter((el) => cartItems.map((el) => el.itemId).indexOf(el.id) > -1)
  const total = getTotal()

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">장바구니</div>
        <span id="shopping-cart-select-all">
          <input
            type="checkbox"
            checked={
              checkedItems.length === cartItems.length ? true : false
            }
            onChange={(e) => handleAllCheck(e.target.checked)} >
          </input>
          <label >전체선택</label>
        </span>
        <div id="shopping-cart-container">
          {!cartItems.length ? (
            <div id="item-list-text">
              장바구니에 아이템이 없습니다.
            </div>
          ) : (
            <div id="cart-item-list">
              {renderItems.map((item, idx) => {
                const quantity = cartItems.filter(el => el.itemId === item.id)[0].quantity
                return <CartItem
                  key={idx}
                  handleCheckChange={handleCheckChange}
                  handleQuantityChange={handleQuantityChange}
                  handleDelete={handleDelete}
                  item={item}
                  checkedItems={checkedItems}
                  quantity={quantity}
                />
              })}
            </div>
          )}
          <OrderSummary total={total.price} totalQty={total.quantity} />
        </div>
      </div >
    </div>
  )
}
