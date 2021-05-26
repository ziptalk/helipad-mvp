import FirebaseService from "../service/FirebaseService";

export default class SignUpUseCase {
  static async withEmail({ ...props }) {
    await FirebaseService.signUpWithEmailAndPassword({ ...props });
  }
}

export enum ErrorCode {
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  WEAK_PASSWORD = "auth/weak-password",
}
