import { products as initialProducts } from '../mocks/products.json'
import { useState } from 'react'
import { AddToCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

import './Products.css'

export function Products () {
  const { addToCart } = useCart()
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <section>
      <ul className='products-container'>
        {
          filteredProducts.map(product => (
            <li className='product-card' key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <strong>{product.title} - ${product.price}</strong>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </li>
          ))
        }
      </ul>
    </section>

  )
}
