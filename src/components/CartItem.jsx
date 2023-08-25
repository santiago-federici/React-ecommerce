import { RemoveFromCartIcon } from './Icons'

export function CartItem ({ thumbnail, title, price, quantity, addToCart, decrementQuantity, removeFromCart }) {
  return (

              <li>
              <img src={thumbnail} alt={title} />
              <strong>{title} - ${price}</strong>
              <div className='quantity-btns-container'>
                <strong className='quantity-btn' onClick={addToCart}>
                  +
                </strong>
                <p>Quantity: {quantity}</p>
                <strong className='quantity-btn' onClick={decrementQuantity}>
                  -
                </strong>
              </div>
              <button onClick={removeFromCart}>
                <RemoveFromCartIcon />
              </button>
            </li>
  )
}
