const reducer = (state = [], action) => {
    switch (action.type) {
        case "getcategories": 
        return  action.payload
        default: 
        return state
    }
    }
    
    
    export default reducer