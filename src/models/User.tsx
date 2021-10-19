export class User {
    id: string;
    username: string;
    password: string; //consider removing.

    constructor(id: string, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}