import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'

export function App() {

    const [products] = useState(initialProducts)
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && (filters.category == 'all' || product.category == filters.category)
            )
        })
    }

    const filteredProducts = filterProducts(products)

    return(
        <main>
            <Header setFilters={setFilters}/>

            <Products products={filteredProducts} />

        </main>
    )
}