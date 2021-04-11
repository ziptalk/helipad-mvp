import FirebaseService from "../service/FirebaseService";

export default class SignUpUseCase {
    static async withEmail(email: string, password: string) {
        await new FirebaseService().signUpWithEmailAndPassword(email, password);
    }
}