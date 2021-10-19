import { createContext, ReactNode, useState } from "react";
import { IShopContext } from "../interface/IShopContext";
import { Product } from "../models/Product";

export const ShopContext = createContext({} as IShopContext);

export const ShopProvider = (props: { children: ReactNode }) => {

    const [products, setProducts] = useState([] as Product[])

    const value = {
        products, setProducts
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}