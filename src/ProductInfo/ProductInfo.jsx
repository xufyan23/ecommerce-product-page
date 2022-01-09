import React from 'react';
import './ProductInfo.scss';
import PlusIcon from '../images/icon-plus.svg';
import MinusIcon from '../images/icon-minus.svg';
import IconCart from '../images/icon-cart-white.svg';
import Button from 'react-bootstrap/esm/Button';
import { useSelector, useDispatch} from 'react-redux';
import { incrementAction, decrementAction, addToCartAction, cartItemAction } from '../Store/appAction';

const ProductInfo = ({productData}) => {

	const quantity = useSelector(state => state.appReducer.QUANTITY);

	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(incrementAction());
	}

	const handleDecrement = () => {
			dispatch(decrementAction());
	}

	const handleAddToCart = () => {
		dispatch(cartItemAction(productData));
		dispatch(addToCartAction());
	}

	return (
    <div className="product-info">
      <small className="clr-orange">Sneaker Company</small>
      <h1>{productData[0].name}</h1>
      <p>{productData[0].description}</p>
      <div className="price-block">
        <span className="price">${productData[0].price}</span>
        <span className="discount-txt">50%</span>
        <small className="line-through">$250.00</small>
      </div>
      <div className="cart-block">
        <div className="counter">
          <button className="icon btn" onClick={handleIncrement}>
            <img src={PlusIcon} alt="increment" />
          </button>
          <span className="number">{quantity}</span>
          <button className="icon btn" onClick={handleDecrement}>
            <img src={MinusIcon} alt="decrement" />
          </button>
        </div>
        <Button className="" disabled={quantity < 1} onClick={handleAddToCart}><img src={IconCart} alt="cart" />Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductInfo;
