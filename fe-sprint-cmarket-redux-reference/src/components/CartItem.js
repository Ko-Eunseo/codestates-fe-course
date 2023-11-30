import React from 'react'

export default function CartItem({
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
}) {
  return (
    <li className="cart-item-body">
      {/* <lable for="checkbox"></lable> */}
      <input
        type="checkbox"
        // id="checkbox"
        title="장바구니 아이템 선택"
        className="cart-item-checkbox"
        onChange={(e) => {
          handleCheckChange(e.target.checked, item.id)
        }}
        checked={checkedItems.includes(item.id) ? true : false} >
      </input>
      <div className="cart-item-thumbnail">
        <img src={item.img} />
      </div>
      <section className="cart-item-info">
        <h3
          className="cart-item-title"
          data-testid={`cart-${item.name}`}>{item.name}
        </h3>
        <p className="cart-item-price">{item.price} 원</p>
      </section>
      {/* <label for="item quantity"></label> */}
      <input
        // id="item quantity"
        title="장바구니 아이템 수량 변경"
        type="number"
        min={1}
        className="cart-item-quantity"
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(Number(e.target.value), item.id)
        }}>
      </input>
      <button className="cart-item-delete" onClick={() => { handleDelete(item.id) }}>삭제</button>
    </li >
  )
}
