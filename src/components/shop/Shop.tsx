import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Product } from "../../models/Product";
import { ObjectConverter } from "../../services/ObjectConverter";
import { ProductHttpClient } from "../../services/ProductHttpClient";
import ProductCard from "../product-card/ProductCard";
import './Shop.css';

const Shop = () => {
    const { products, setProducts } = useContext(ShopContext);
    const productClient = new ProductHttpClient();
    const converter = new ObjectConverter();

    useEffect(() => {
        const tempProducts = [] as Product[];
        productClient.fetchAll()
            .then((fetchedArray: any) => {
                fetchedArray.forEach((item: any) => {
                    tempProducts.push(converter.jsonToProduct(item))
                });
            })
        setProducts(tempProducts);
    }, [])

    return (
        <div className="shop-view">
            <div className="products">
                {
                    products.length > 0 ?
                        products.map((product) => {
                            <ProductCard
                                product={product}
                            />
                        })
                        :
                        <div>
                            All products sold out, please leave.
                        </div>
                }
            </div>
        </div>
    )
}

export default Shop;