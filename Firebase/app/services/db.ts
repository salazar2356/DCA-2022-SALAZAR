import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import{ 
    collection, 
    addDoc, 
    getFirestore,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCIx1O-Sb9IljDsaKtdpTNMcQ3-2aOMgIA",
    authDomain: "db-component-53a49.firebaseapp.com",
    projectId: "db-component-53a49",
    storageBucket: "db-component-53a49.appspot.com",
    messagingSenderId: "242326394356",
    appId: "1:242326394356:web:c6adb0316a59b5e3eb95a1"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");

export const queryUser = async ({
    email, 
    password
} : { 
    email: string, 
    password: string
}) => {
    try {

        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        
        
        querySnapshot.forEach((doc:any) => {
            console.log(doc.id, "=>", doc.data());
    

 
});
return ! querySnapshot.empty;
        

    } catch (error) {

        return false;
    }
};

export const addUser = async ({
    email, 
    password
} : { 
    email: string, 
    password: string
}) => {
    try {

        const docRef = await(collection(db, "usuarios"),{
            email,
            password
        });

        console.log(docRef.id);
        return docRef.ref;
    } catch(error){
        console.log. error(error);
        
    };
    
        
}
    


