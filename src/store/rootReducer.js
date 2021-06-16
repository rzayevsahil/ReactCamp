//tüm stateleri eklediğim yer

const { combineReducers } = require("redux");
const { default: cartReducer } = require("./reducers/cartReducer");


const rootReducer = combineReducers({
    cart : cartReducer
})


export default rootReducer;