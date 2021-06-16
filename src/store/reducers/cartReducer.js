import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const intialState={
    cartItems:cartItems
}

//gönderdiğimiz action a göre sepetin son halini tutduğumuz yer - reducer
//action type ve payload vardı diye bunları da buraya ekledik
export default function cartReducer(state=intialState, {type,payload}) {
    //gelecek type göre hareket ediyor
    switch (type) {
        case ADD_TO_CART:
            let product=state.cartItems.find(c=>c.product.id===payload.id)
            break;
    
        default:
            break;
    }
}