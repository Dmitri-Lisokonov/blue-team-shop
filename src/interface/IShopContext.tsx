import { Product } from "../models/Product";
import { User } from "../models/User";

export interface IShopContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    userfetched: boolean;
    setUserFetched: React.Dispatch<React.SetStateAction<boolean>>;
}