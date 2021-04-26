import firebase from "firebase";
import {userStore} from "../../shared/Firebase";

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

    static async signUpWithEmailAndPassword(email: string,
                                            password: string,
                                            firstName: string,
                                            lastName: string,
                                            isAgent: boolean) {
        let credential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if (credential == null || credential.user == null) {
            throw Error("Some error was occurred during creating account.");
        }
        return this.initializeAccount(credential.user.uid, email, firstName, lastName, isAgent);
    }

    private static async initializeAccount(uid: string, email: string, firstName: string, lastName: string, isAgent: boolean) {
        return userStore.doc(uid).set({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "likes": [],
            "isAgent": isAgent
        });
    }
}