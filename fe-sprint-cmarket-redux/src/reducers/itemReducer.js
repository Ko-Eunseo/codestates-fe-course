import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return Object.assign({}, state, { //빈객체를 넘기는 이유: 객체 복사
        cartItems: [...state.cartItems, action.payload]
      })
    case REMOVE_FROM_CART:
      //TODO
      return Object.assign({}, state, {
        cartItems: [...state.cartItems].filter(item => {
          return item.itemId !== action.payload.itemId
        })
      })
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO
      return Object.assign({}, state,
        state.cartItems[idx].quantity = action.payload.quantity
      )
    default:
      return state;
  }
}

export default itemReducer;