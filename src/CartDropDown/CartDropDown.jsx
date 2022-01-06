import React from 'react';
import "./CartDropDown.scss";
import Delete from '../images/icon-delete.svg';
import { useSelector, useDispatch } from "react-redux";
import { removeAction } from '../Store/appAction';

const CartDropDown = ({productData, activeImg, total}) => {
	const counter = useSelector((state) => state.appReducer.CARTCOUNTER);
	const cartItem = useSelector((state) => state.appReducer.CART_ITEM);

	const dispatch = useDispatch();

	const deleteItem = (id) => {
		const removeCartData = cartItem.filter(data => data.id !== id)
		dispatch(removeAction(removeCartData));
		console.log(removeCartData);
	};
	return (
    <div className="checkout-block">
			{
				cartItem.length ?
				<>
					<div className="product-img">
						<img src={activeImg} alt="" />
					</div>
					<div className="product-text">
						<div className="name">{cartItem[0].name}</div>
						<span className="price">${cartItem[0].price}</span>
						<span className="quantity">x{counter}</span>
						<span className="total"></span>
					</div>
					<div>
						<button className="btn" onClick={() => deleteItem(cartItem[0].id)}>
							<img src={Delete} alt="" />
						</button>
					</div>
				</>

					: ''
			}
    </div>
  );
}

export default CartDropDown;
