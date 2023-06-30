import User from "./User";

export default class Company extends User {
    type: string;

    constructor(
        id: number | null,
        name: string,
        email: string,
        cpf: string,
        username: string,
        password: string,
        type: string
    ) {
        super(id, name, email, cpf, username, password);
        this.type = type;
    }
}