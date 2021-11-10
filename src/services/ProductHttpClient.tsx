import { ApiConfig } from "../config/ApiConfig";

export class ProductHttpClient {
    public config = new ApiConfig();
    public baseUrl: string = this.config.url + 'product/';;

    public fetchAll() {
        const path = "all"
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path)
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    public fetchById(id: number) {
        const path = id;
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path)
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    public fetchSecret(token: string) {
        const path = 'admin';
        const headers = {
            authorization: "Bearer " + token
        }
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: 'get',
                headers: headers
            })
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }
}