import FirebaseService from "../service/FirebaseService";

export default class SignUpUseCase {
    static async withEmail(email: string, password: string, firstName: string, lastName: string, isAgent: boolean) {
        await FirebaseService.signUpWithEmailAndPassword(email, password, firstName, lastName, isAgent);
    }
}

export enum ErrorCode {
    EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
    WEAK_PASSWORD = "auth/weak-password"
}