export const getData = (data) => {
return (dispath) => {
    dispath({
        type: "savedata",
       payload: data 
    })
}
}

export const getCategories = (data) => {
    return (dispatch) => {
        dispatch({
            type: "getcategories",
            payload: data
        })
        
    }
}

export const SearchData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "searchdata",
            payload: data
        })
    }
}

export const FilterData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "filterdata",
            payload: data
        })
    }
}
