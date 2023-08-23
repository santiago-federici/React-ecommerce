import { products as initialProducts } from '../mocks/products.json'
import { useState } from 'react'
import { AddToCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilters'

import './Products.css'

export function Products() {
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
              <strong>{product.title} - {product.price}</strong>
              <button><AddToCartIcon /></button>
            </li>
          ))
        }
      </ul>
    </section>

  )
}