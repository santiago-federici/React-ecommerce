import { Cart } from "./Cart";
import { Filters } from "./Filters";

export function Header() {

    return(
        <header>
            <h1>PRODUCTS</h1>

            <Cart />

            <Filters />
        </header>
    )
}