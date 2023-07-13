import UserData from "./UserData";

export default class Coord extends UserData{
    token: string;

    constructor(
        uid: string | undefined,
        name: string,
        cpf: string,
        token: string
    ) {
        super(uid, name, cpf);
        this.token = token;
        this.type = "coord";
    }
}