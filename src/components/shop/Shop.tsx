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
    const [alert, setAlert] = useState('');

    useEffect(() => {
        const tempProducts = [] as Product[];
        if (products.length === 0) {
            productClient.fetchAll()
                .then((res: any) => {
                    if (res['status'] === 0) {
                        const products: Product[] = JSON.parse(res['message'])
                        products.forEach((item: any) => {
                            let product = converter.jsonToProduct(item);
                            tempProducts.push(product);
                        });
                    }
                    else {

                        setAlert(res['message'])
                    }
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
                                    key={index}
                                    product={product}
                                />
                            )
                        })
                        :
                        <div className="">
                            {alert}
                        </div>
                }
            </div>
        </div>
    )
}

export default Shop;