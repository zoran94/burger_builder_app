import * as actionTypes from "./../actions/actions";

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.PURCHASE_FAILED:
            return {
                ...state,
                loading: false
            }
            case actionTypes.FETCH_ORDERS:
                return {
                    ...state,
                    loading: false
                }
                case actionTypes.FETCH_ORDERS_SUCCESS: 
                return {
                    ...state,
                    orders: action.orders,
                    loading: false
                }
        default:
            return state
    }

}

export default reducer;


