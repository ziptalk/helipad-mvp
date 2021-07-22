import FirebaseService from "../service/FirebaseService";

export default class LoginUseCase {
  static execute({ email, password }: { email: string; password: string }) {
    return FirebaseService.logInWithEmailAndPassword(email, password);
  }

  static registerAuthStateChangeListener(onChange: (user: any) => void) {
    return FirebaseService.registerAuthStateChangeListener(onChange);
  }

  static logout() {
    return FirebaseService.logout();
  }
}

export enum ErrorCode {
  WRONG_PASSWORD = "auth/wrong-password",
  USER_NOT_FOUND = "auth/user-not-found",
}
