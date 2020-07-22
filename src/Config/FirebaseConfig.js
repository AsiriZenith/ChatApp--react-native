import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCaLKyMKD7FStYdhArXneNCt8FgN5zsyig",
    authDomain: "chatapp-31b3b.firebaseapp.com",
    databaseURL: "https://chatapp-31b3b.firebaseio.com",
    projectId: "chatapp-31b3b",
    storageBucket: "chatapp-31b3b.appspot.com",
    messagingSenderId: "51989865861",
    appId: "1:51989865861:web:5231fc15bb226220c5d0ec"
};

// export default function firebaseInit(){
//     firebase.initializeApp(firebaseConfig);
// } 

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();