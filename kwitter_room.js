var firebaseConfig = {
      apiKey: "AIzaSyAd1hXExO63yYI3pcDbXDaaEm5gtyO5B2U",
      authDomain: "kwitter-f1c8a.firebaseapp.com",
      databaseURL: "https://kwitter-f1c8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1c8a",
      storageBucket: "kwitter-f1c8a.appspot.com",
      messagingSenderId: "91814116560",
      appId: "1:91814116560:web:68be2c687b4d8b565972d5",
      measurementId: "G-LVJL6X4KFG"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();