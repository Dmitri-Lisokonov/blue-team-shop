import { Product } from "../models/Product"
import { User } from "../models/User";

export class ObjectConverter {
    public jsonToProduct(jsonObject: any) {
        const product = new Product(jsonObject['id'], jsonObject['name'], jsonObject['description'], jsonObject['price']);
        return product;
    }

    public jsonToUser(jsonObject: any) {
        const user = new User(jsonObject['id'], jsonObject['username'], jsonObject['password']);
        return user;
    }
}
