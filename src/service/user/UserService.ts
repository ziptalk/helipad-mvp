import firebase from "firebase";
import { userStore } from "../../shared/Firebase";
import { inviteCodeStore } from "../../shared/Firebase";
import User from "../../model/User";
import { setTokenSourceMapRange } from "typescript";
import { dividerChecker } from "../../views/MyPage/components/process/processService";
import { resolveAny } from "dns";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default class UserService {
  static logInWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  static logout() {
    return firebase.auth().signOut();
  }

  static registerAuthStateChangeListener(onChange: (user: any) => void) {
    return firebase.auth().onAuthStateChanged(onChange);
  }

  // static async signUpWithEmailAndPassword(
  //   email: string,
  //   password: string,
  //   firstName: string,
  //   lastName: string,
  //   isAgent: boolean
  // ) {
  //   let credential = await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password);
  //   if (credential == null || credential.user == null) {
  //     throw Error('Some error was occurred during creating account.');
  //   }
  //   return this.initializeAccount(
  //     credential.user.uid,
  //     email,
  //     firstName,
  //     lastName,
  //     isAgent
  //   );
  // }
  static async signUpWithKakao(token: string) {
    console.log("token", token);
    await firebase
      .auth()
      .signInWithCustomToken(token)
      .then((userCredential: any) => {
        // Signed in
        var user = userCredential.user;
        console.log("kakao login:", user);
        // ...
      })
      .catch((error: any) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("signup with kakao error");
        // ...
      });
  }
  static async signUpWithEmailAndPassword({ ...props }) {
    let { email, password } = props;

    let credential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (credential == null || credential.user == null) {
      throw Error("Some error was occurred during creating account.");
    }
    delete props.password;
    delete props.passwordConfirm;
    let uid = credential.user.uid;
    props = { uid, ...props };
    this.initializeAccount(props);
    return uid;
  }

  static async getUser(userId: string): Promise<User> {
    let user = await userStore.doc(userId).get();

    return User.fromObject(user.data());
  }

  private static async initializeAccount({ ...props }) {
    let { uid } = props;

    return userStore
      .doc(uid)
      .set({ favorite: [], onGoing: [], likes: [], ...props });
    // return userStore.doc(uid).set({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   likes: [],
    //   isAgent: isAgent,
    // });
  }

  static async contactToAgent(userEmail: string, assetId: string) {
    try {
      let firebaseResult = await userStore
        .where("email", "==", userEmail)
        .get();
      return firebaseResult.docs[0].ref.update({
        contact: firebase.firestore.FieldValue.arrayUnion(assetId),
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  //? Invite Code Store
  static async checkInviteCode(inviteCode: string) {
    let firebaseResult = await inviteCodeStore
      .where("password", "==", `${inviteCode}`)
      .get();
    console.log("firebaseResult :", firebaseResult);
    console.log("firebaseResult.docs.length :", firebaseResult.docs.length);
    if (firebaseResult.docs.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
