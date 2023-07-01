import User from "./User";

export default class Company extends User {
    type: string;

    constructor(
        id: string | null,
        name: string,
        cpf: string,
        email: string,
        password: string,
        type: string
    ) {
        super(id, name, cpf, email, password, "company");
        this.type = type;
    }
}