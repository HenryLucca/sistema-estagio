import UserData from "./UserData";

export default class Company extends UserData {
    branch: string;

    constructor(
        id: string | undefined,
        name: string,
        cpf: string,
        branch: string
    ) {
        super(id, name, cpf);
        this.branch = branch;
        this.type = "company";
    }
}