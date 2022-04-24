import {combineReducers} from "redux"
import productsReducer from "./productReducer"
import categoryProducer from "./categoriesReducer"

const reducer = combineReducers({
    products: productsReducer,
    category: categoryProducer
})

export default reducer