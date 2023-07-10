export default abstract class UserData {
    uid: number | null;
    name: string;
    cpf: string;

    constructor( uid: number | null, name: string, cpf: string ) {
        this.uid = uid;
        this.name = name;
        this.cpf = cpf;
    }
}