import { INCREMENT, DECREMENT, REMOVE, QUANTITY, ADDTOCART, TOTAL, CART_ITEM } from "./appActionTypes";

export const incrementAction = () => {
	return {
		type: INCREMENT
	}
}

export const decrementAction = () => {
	return {
		type: DECREMENT
	}
}

export const quantityAction = () => {
	return {
		type: QUANTITY
	}
}

export const addToCartAction = () => {
	return {
		type: ADDTOCART
	}
}

export const totalAction = () => {
	return {
		type: TOTAL
	}
}

export const removeAction = (data) => {
	return {
		type: REMOVE,
		payload: data
	}
}

export const cartItemAction = (data) => {
	console.log(data, "hellpp")
	return {
		type: CART_ITEM,
		payload: data
	}
}
