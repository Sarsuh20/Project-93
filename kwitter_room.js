var firebaseConfig = {
      apiKey: "AIzaSyDkIcCplByvJ7GdFssToSD0sc4z7v84INk",
  authDomain: "p-93-e8ae3.firebaseapp.com",
  databaseURL: "https://p-93-e8ae3-default-rtdb.firebaseio.com",
  projectId: "p-93-e8ae3",
  storageBucket: "p-93-e8ae3.appspot.com",
  messagingSenderId: "870377060421",
  appId: "1:870377060421:web:131abd6dcdb9ce60cf8b2c",
  measurementId: "G-B420K57D3V"
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