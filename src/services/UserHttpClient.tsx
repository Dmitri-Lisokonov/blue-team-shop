export class UserHttpClient {
    public baseUrl: string = "https://localhost:44350/user/google/";

    public fetchByEmail(email: string) {
        const path = email;
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path)
                .then((res) => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    public validateGoogleLogin(googleResponse: any, tryRegister: boolean) {
        let path: string;
        let payload = {
            token: googleResponse.tokenId
        }
        if (tryRegister) {
            path = "auth/register"
        }
        else {
            path = "auth"
        }
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + path, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
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