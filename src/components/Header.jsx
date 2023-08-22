import { Filters } from "./Filters";

export function Header({setFilters}) {

    return(
        <header>
            <h1>PRODUCTS</h1>

            <Filters setFilters={setFilters} />
        </header>
    )
}