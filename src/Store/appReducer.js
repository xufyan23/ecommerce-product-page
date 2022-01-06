import { INCREMENT, DECREMENT, REMOVE, ADDTOCART, TOTAL, CART_ITEM } from "./appActionTypes";

const initialState = {
	INCREMENT: 0,
	DECREMENT: 0,
	QUANTITY: 0,
	CARTCOUNTER: 0,
	ADDTOCART: 0,
	TOTAL: 0,
	CART_ITEM: [],
	REMOVE: '',

}

const appReducer = (state = initialState, action) => {
	console.log(action.payload)
	switch(action.type) {
		case INCREMENT:
			return {...state , QUANTITY: state.QUANTITY + 1 , INCREMENT: state.INCREMENT + 1}
		case DECREMENT:
			return {...state ,QUANTITY: state.QUANTITY === 0 ? 0 : state.QUANTITY - 1, DECREMENT: state.DECREMENT === 0 ?  0 : state.DECREMENT - 1, CARTCOUNTER: state.CARTCOUNTER === 0 ?  state.CARTCOUNTER : state.CARTCOUNTER -1 }
		case ADDTOCART:
			return {...state , CARTCOUNTER: state.CARTCOUNTER + 1 }
		case CART_ITEM:
			return {...state, CART_ITEM: action.payload }
		case TOTAL:
			return {...state }
		case REMOVE:
			return {...state, CART_ITEM: action.payload, CARTCOUNTER: action.payload.length}
		default:
			return state;
	}
}

export default appReducer;
