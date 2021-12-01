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


    public admin(token: string) {
        const path = 'admin';
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + token
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }
}