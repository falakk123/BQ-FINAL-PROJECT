export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload.item] }

        case "REMOVE_ITEM":
            const itemRemaining = state.cart.filter((item) => item._id != action.payload.id)
            console.log(itemRemaining)
            return { ...state, cart: itemRemaining }

        case "CLEAR_CART":
            return { ...state, cart: [] }


        default:
            return state
    }
}