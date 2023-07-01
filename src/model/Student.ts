import User from "./User";

export default class Intern extends User {
    
    address: string;
    situation: string; // situation can only be "Searching for internship", "Internship in progress" or "Unemployed"

    constructor(
        uid: number | null,
        name: string,
        email: string,
        cpf: string,
        username: string,
        password: string,
        address: string,
        situation: string
    ) {
        super(uid, name, email, cpf, username, password);
        this.address = address;
        this.situation = situation;
    }
}