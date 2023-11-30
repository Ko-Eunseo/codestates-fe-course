import React from 'react'

export default function Item({ item, handleClick }) {

  return (
    <li key={item.id} className="item">
      {/* 제목이 이미 있으니까 굳이 대체 텍스트 주지 않아도 됨. 두번 읽어주는 대참사 */}
      <img className="item-img" src={item.img}
      // alt={item.name}
      ></img>
      <h3 className="item-name" data-testid={item.name}>{item.name}</h3>
      <span className="item-price">{item.price}</span>
      <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button>
    </li>
  )
}
