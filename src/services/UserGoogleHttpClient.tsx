import { ApiConfig } from "../config/ApiConfig";

export class UserGoogleHttpClient {
    public config = new ApiConfig();
    public baseUrl: string = this.config.url + 'user/google/';

    public Login(googleResponse: any) {
        const path = 'login';

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: "POST",
                body: JSON.stringify(googleResponse.tokenId),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
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