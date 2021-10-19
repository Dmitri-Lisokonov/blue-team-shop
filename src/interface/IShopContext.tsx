import { Product } from "../models/Product";

export interface IShopContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}