import User from "./User";

export default class Coord extends User{
    token: string;

    constructor(
        id: number | null,
        name: string,
        email: string,
        cpf: string,
        username: string,
        password: string,
        token: string
    ) {
        super(id, name, email, cpf, username, password);
        this.token = token;
    }
}