import { useState } from "react"

export function Filters({setFilters}) {

    const [minPrice, setMinPrice] = useState(0)
    const handlePriceChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value 
        }))
        setMinPrice(e.target.value)
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
                <label>Min Price</label>
                <input type='range' id='price' min='0' max='1000' onChange={handlePriceChange} />
                <p>${minPrice}</p>
            </div>

            <div className="filter-container">
                <label>Category</label>
                <select id="category" onChange={handleCategoryChange}>
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