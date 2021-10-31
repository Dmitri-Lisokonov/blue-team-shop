import { createContext, ReactNode, useState } from "react";
import { IShopContext } from "../interface/IShopContext";
import { Product } from "../models/Product";
import { User } from "../models/User";

export const ShopContext = createContext({} as IShopContext);

export const ShopProvider = (props: { children: ReactNode }) => {

    const [products, setProducts] = useState([] as Product[])
    const [user, setUser] = useState({} as User)

    const value = {
        products, setProducts,
        user, setUser
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}