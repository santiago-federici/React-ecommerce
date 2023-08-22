import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products({ products }) {

    return(
        <section>
            <ul className='products-container'>
                {
                    products.map(product => (
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