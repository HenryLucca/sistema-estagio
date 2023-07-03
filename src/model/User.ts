export default abstract class User {
    uid: string;
    email: string;
    displayName: string;
    token: string;
    // photoURL: string;

    constructor(
        uid: string,
        email: string,
        displayName: string,
        token: string,
        // photoURL: string
    ) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.token = token;
        // this.photoURL = photoURL;
    }
}