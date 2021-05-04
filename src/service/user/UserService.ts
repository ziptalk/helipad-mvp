import firebase from 'firebase';
import { userStore } from '../../shared/Firebase';
import { inviteCodeStore } from '../../shared/Firebase';
import User from '../../model/User';
import { setTokenSourceMapRange } from 'typescript';
import { dividerChecker } from '../../views/MyPage/components/process/processService';

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

  static async signUpWithEmailAndPassword(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    isAgent: boolean
  ) {
    let credential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (credential == null || credential.user == null) {
      throw Error('Some error was occurred during creating account.');
    }
    return this.initializeAccount(
      credential.user.uid,
      email,
      firstName,
      lastName,
      isAgent
    );
  }

  static async getUser(userId: string): Promise<User> {
    let user = await userStore.doc(userId).get();
    return User.fromObject(user.data());
  }

  private static async initializeAccount(
    uid: string,
    email: string,
    firstName: string,
    lastName: string,
    isAgent: boolean
  ) {
    return userStore.doc(uid).set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      likes: [],
      isAgent: isAgent,
    });
  }

  static async contactToAgent(userEmail: string, assetId: string) {
    try {
      let firebaseResult = await userStore
        .where('email', '==', userEmail)
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
      .where('password', '==', `${inviteCode}`)
      .get();
    console.log('firebaseResult.docs.length :', firebaseResult.docs.length);
    if (firebaseResult.docs.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
