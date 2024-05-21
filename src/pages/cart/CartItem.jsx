import React, { useContext } from 'react'
import "./cartItem.css"
import { ShopContext } from '../../context/ShopContext';
function CartItem(props) {
    const { updateCartItemCount,cartItems,addToCart,removeFromCart } = useContext(ShopContext);
    const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)} id='secondButton'> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;