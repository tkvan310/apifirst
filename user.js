import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

export function writeUserData(infoUser) {
  const db = getDatabase();
  set(ref(db, 'users/' + infoUser.uid), {
    username: infoUser.username,
    email: infoUser.email,
    img : "https://firebasestorage.googleapis.com/v0/b/signinup-b305f.appspot.com/o/%E1%BA%A3nh%20profile%20m%E1%BA%B7c%20%C4%91%E1%BB%8Bnh.jpg?alt=media&token=bf1c539d-91ed-46af-9df6-da331cd27535 ",
    
  });
}