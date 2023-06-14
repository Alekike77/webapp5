// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBIxsWiEKNw5CAUxt5cZ3lwOHi9enYyDdU",
    authDomain: "c101-a3e84.firebaseapp.com",
    databaseURL: "https://c101-a3e84-default-rtdb.firebaseio.com",
    projectId: "c101-a3e84",
    storageBucket: "c101-a3e84.appspot.com",
    messagingSenderId: "974904084304",
    appId: "1:974904084304:web:4f6cc6cc0c2f3ccbd28e55"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



