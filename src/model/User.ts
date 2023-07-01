export default abstract class User {
    #id: string | null;
    #name: string;
    #cpf: string;
    #email: string;
    #password: string;
    #userType: string;

    //implement constructor

    constructor(
        id: string | null,
        name: string,
        cpf: string,
        email: string,
        password: string,
        userType: string
    ) {
        this.#id = id;
        this.#name = name;
        this.#cpf = cpf;
        this.#email = email;
        this.#password = password;
        this.#userType = userType;
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

    get password() {
        return this.#password;
    }

    get userType() {
        return this.#userType;
    }
    
}