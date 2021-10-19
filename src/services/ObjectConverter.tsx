import { Product } from "../models/Product"
import { User } from "../models/User";

export class ObjectConverter {
    public jsonToProduct(jsonObject: any) {
        const product = new Product(jsonObject['Id'], jsonObject['Name'], jsonObject['Description'], jsonObject['Price']);
        return product;
    }

    public jsonToUser(jsonObject: any) {
        const user = new User(jsonObject['Id'], jsonObject['Username'], jsonObject['Password']);
        return user;
    }
}
