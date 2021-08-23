import FirebaseService from "../service/FirebaseService";

export default class SignUpUseCase {
  static async withEmail({ ...props }) {
    return await FirebaseService.signUpWithEmailAndPassword({ ...props });
  }
  static async signUpWithKakao(token: string) {
    return await FirebaseService.signUpWithKakao(token);
  }
}

export enum ErrorCode {
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  WEAK_PASSWORD = "auth/weak-password",
}
