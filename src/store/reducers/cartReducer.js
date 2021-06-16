import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const intialState = {
  cartItems: cartItems,
};

//gönderdiğimiz action a göre sepetin son halini tutduğumuz yer - reducer
//action type ve payload vardı diye bunları da buraya ekledik
export default function cartReducer(state = intialState, { type, payload }) {
  //gelecek type göre hareket ediyor
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state, //newliyoruz sanki
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }], //state deki cartItems leri değiitirmek gibi
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
