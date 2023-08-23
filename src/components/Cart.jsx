import { useId } from 'react'
import { CartIcon, RemoveFromCartIcon, ClearCartIcon} from './Icons'

import './Cart.css'

export function Cart() {
  const cartIconId = useId()

  return (
    <>
      <label className='cart-btn' htmlFor={cartIconId}>
        <CartIcon />
      </label>

      <input type='checkbox' id={cartIconId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' />
            <strong>Iphone - $1000</strong>
            <div>
              <p>Quantity: 1</p>
              <button>+</button>
            </div>
            <RemoveFromCartIcon />
          </li>
          <li>
            <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' />
            <strong>Iphone - $1000</strong>
            <div>
              <p>Quantity: 1</p>
              <button>+</button>
            </div>
            <RemoveFromCartIcon />
          </li>

          <button><ClearCartIcon /></button>
        </ul>
      </aside>
    </>
  )
}