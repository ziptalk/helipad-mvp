import FirebaseService from "../service/FirebaseService";

export default class LoginUseCase {
    static execute(email: string, password: string) {
        return new FirebaseService().logInWithEmailAndPassword(email, password);
    }
}

export enum ErrorCode {
    WRONG_PASSWORD = "auth/wrong-password",
    USER_NOT_FOUND = "auth/user-not-found"
}