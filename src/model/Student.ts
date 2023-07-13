import UserData from "./UserData";

export default class Student extends UserData {
    
    address: string;
    situation: string; // situation can only be "Searching for internship", "Internship in progress" or "Unemployed"

    constructor(
        uid: string | undefined,
        name: string,
        cpf: string,
        address: string,
        situation: string
    ) {
        super(uid, name, cpf);
        this.address = address;
        this.situation = situation;
        this.type = "student";
    }
}