import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'

import './Cart.css'

export function Cart () {
  const cartIconId = useId()
  const { cart, clearCart, addToCart, removeFromCart, decrementQuantity } = useCart()

  return (
    <>
      <label className='cart-btn' htmlFor={cartIconId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartIconId} hidden />

      <aside className='cart'>
      <label className='cart-btn' htmlFor={cartIconId}>
        <p className='close-cart-btn'>
          X
        </p>
      </label>
      <input type='checkbox' id={cartIconId} hidden />

        <ul>
        {
          cart.map(product => (
            <CartItem key={product.id}
            addToCart={() => addToCart(product)}
            decrementQuantity={() => decrementQuantity(product)}
            removeFromCart={() => removeFromCart(product)}
            {...product} />

          ))
        }
        </ul>

        <button onClick={clearCart} className='clear-cart-btn'>
            <ClearCartIcon />
        </button>

      </aside>
    </>
  )
}
