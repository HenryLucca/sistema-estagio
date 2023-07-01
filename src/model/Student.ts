import User from "./User";

export default class Intern extends User {
    address: string;
    // situation can only be "Searching for internship", "Internship in progress" or "Unemployed"
    situation: string;

    constructor(
        id: string | null,
        name: string,
        cpf: string,
        email: string,
        password: string,
        address: string,
        situation: string
    ) {
        super(id, name, cpf, email, password, "intern");
        this.address = address;
        this.situation = situation;
    }
}