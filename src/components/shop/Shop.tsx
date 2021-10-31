import { useContext, useEffect, useState } from "react";
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
    console.log(products);

    useEffect(() => {
        const tempProducts = [] as Product[];
        if (products.length === 0) {
            productClient.fetchAll()
                .then((fetchedArray: any) => {
                    fetchedArray.forEach((item: any) => {
                        let product = converter.jsonToProduct(item);
                        tempProducts.push(product)
                    });
                })
                .then(() => setProducts(tempProducts))
        }
    }, [products])

    return (
        <div className="shop-view">
            <div className="products">
                {
                    products.length > 0 ?
                        products.map((product, index) => {
                            return (
                                <ProductCard
                                    product={product}
                                />
                            )
                        })
                        :
                        <div>
                            Loading products...
                        </div>
                }
            </div>
        </div>
    )
}

export default Shop;