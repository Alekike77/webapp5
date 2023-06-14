const firebaseConfig = {
    apiKey: "AIzaSyBIxsWiEKNw5CAUxt5cZ3lwOHi9enYyDdU",
    authDomain: "c101-a3e84.firebaseapp.com",
    databaseURL: "https://c101-a3e84-default-rtdb.firebaseio.com",
    projectId: "c101-a3e84",
    storageBucket: "c101-a3e84.appspot.com",
    messagingSenderId: "974904084304",
    appId: "1:974904084304:web:4f6cc6cc0c2f3ccbd28e55"
  };

  function getData() {firebaseConfig.databaseURL().ref("/").on('value', function (snapshot) {document.getElementById ("output").innerHTML = "";snapshot.forEach (function(childSnapshot) {childkey = childSnapshot.key;
Room_names = childKey;
});});}
getData();
function logout()
user_name
room_name