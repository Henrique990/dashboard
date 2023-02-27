import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBYk8fO6q6xkzbV2Sf1oU_QRmYt0g9z-2s",
    authDomain: "daniel-cliente.firebaseapp.com",
    projectId: "daniel-cliente",
    storageBucket: "daniel-cliente.appspot.com",
    messagingSenderId: "404450278541",
    appId: "1:404450278541:web:d43e6ae3ec2ad783ab76c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
