import { Products } from './components/Products'
import { Header } from './components/Header'
import { FiltersProvider } from './context/filters'

import './App.css'

export function App() {


  return (
    <FiltersProvider>
      <Header />
      
      <main>
        <Products />
      </main>
    </FiltersProvider>
  )
}