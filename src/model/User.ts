export default abstract class User {
    #id: number | null;
    #name: string;
    #email: string;
    #cpf: string;
    #usename: string;
    #password: string;

    //implement constructor

    constructor(
        id: number | null,
        name: string,
        email: string,
        cpf: string,
        username: string,
        password: string
    ) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#cpf = cpf;
        this.#usename = username;
        this.#password = password;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get cpf() {
        return this.#cpf;
    }

    get username() {
        return this.#usename;
    }

    get password() {
        return this.#password;
    }
    
}