import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOYNuw6FS5xLqVtNJcOFlgCeGQK2lJ0aU",
    authDomain: "treatland-ecomm.firebaseapp.com",
    projectId: "treatland-ecomm",
    storageBucket: "treatland-ecomm.appspot.com",
    messagingSenderId: "281096745152",
    appId: "1:281096745152:web:25c157fddaa8a92952fd25",
    measurementId: "G-54SBYQ74LJ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot =  await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;