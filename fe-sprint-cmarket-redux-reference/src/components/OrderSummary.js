import React from 'react'

export default function OrderSummary({ totalQty, total }) {
  return (
    <aside id="order-summary-container">
      <h4>주문 합계</h4>
      <div id="order-summary">
        총 아이템 개수 : <p className="order-summary-text">{totalQty} 개</p>
        <hr></hr>
        <div id="order-summary-total">
          합계 : <p className="order-summary-text">{total} 원</p>
        </div>
      </div>
    </aside >
  )
}
