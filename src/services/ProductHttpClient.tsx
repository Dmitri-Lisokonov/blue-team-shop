export class ProductHttpClient {
    public baseUrl: string = "https://localhost:44350/product/";

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
}