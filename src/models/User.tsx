export class User {
    email: string;
    name: string;
    token: string;
    role: string;

    constructor(email: string, name: string, role: string, token: string) {
        this.email = email;
        this.name = name;
        this.role = role;
        this.token = token;
    }
}