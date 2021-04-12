import FirebaseService from "../service/FirebaseService";

export default class SignUpUseCase {
    static withEmail(email: string, password: string) {
        return new FirebaseService().signUpWithEmailAndPassword(email, password);
    }
}

export enum ErrorCode {
    EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
}