const reducer = (state = [], action) => {
switch (action.type) {
    case "savedata": 
    return  action.payload
    case "filterdata": 
        if (action.payload.selected === "Laptops") {
            return action.payload.products.filter(product => product.categoryId === 0 )
        } else if (action.payload.selected === "Mobiles") {
            return action.payload.products.filter(product => product.categoryId === 1 )
        } else {
            return state
        }
    default: 
    return state
}
}


export default reducer