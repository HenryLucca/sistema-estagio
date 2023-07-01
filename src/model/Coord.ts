import User from "./User";

export default class Coord extends User{
    token: string;

    constructor(
        id: string | null,
        name: string,
        cpf: string,
        email: string,
        password: string,
        token: string
    ) {
        super(id, name, cpf, email, password, "coord");
        this.token = token;
    }
}