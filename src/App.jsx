import { Products } from './components/Products'
import { Header } from './components/Header'
import { FiltersProvider } from './context/filters'
import { CartProvider } from './context/cart'

import './App.css'

export function App () {
  return (
    <FiltersProvider>
      <CartProvider>

        <Header />

        <main>
          <Products />
        </main>
      </CartProvider>
    </FiltersProvider>
  )
}
