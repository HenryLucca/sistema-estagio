export default abstract class UserData {
    uid: string | undefined;
    name: string;
    cpf: string;
    // type can only be "student", "company" or "coord"
    type: string | undefined;

    constructor( uid: string | undefined, name: string, cpf: string ) {
        this.uid = uid;
        this.name = name;
        this.cpf = cpf;
    }
}