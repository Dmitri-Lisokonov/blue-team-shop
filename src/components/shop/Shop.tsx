import ProductList from "../product-list/ProductList";
import './Shop.css';

const Shop = () => {

    return (
        <div className="shop-view">
            <div className="products-card">
                <ProductList />
            </div>
        </div>
    )
}

export default Shop;