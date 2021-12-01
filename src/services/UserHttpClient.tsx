import { ApiConfig } from "../config/ApiConfig";

export class UserHttpClient {
    public config = new ApiConfig();
    public baseUrl: string = this.config.url + 'user/';

    public register(user: any) {
        const path = 'register';
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: "POST",
                body: JSON.stringify(user),
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

    public login(user: any) {
        const path = 'login';
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: "POST",
                body: JSON.stringify(user),
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

    public checkSession(token: string) {
        const path = 'session';
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