import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters() {

    const { filters, setFilters } = useFilters()

    
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    
    const handlePriceChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value 
        }))
    }
    

    const handleCategoryChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return(
        <section className="filters">
            <div className="filter-container price-range">
                <label htmlFor={minPriceFilterId}>Min Price</label>
                <input 
                type='range' 
                id={minPriceFilterId} 
                min='0' 
                max='1000' 
                value={filters.minPrice}
                onChange={handlePriceChange} />
                <p>${filters.minPrice}</p>
            </div>

            <div className="filter-container">
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleCategoryChange}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='home-decoration'>Home decoration</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='skincare'>Skincare</option>

                </select>
            </div>
        </section>
    )
}