
var firebaseConfig = {
      apiKey: "AIzaSyC1xmYFE7Jt2IFi50Wd9FEfvSwhD99wDoY",
      authDomain: "kwitter-a4669.firebaseapp.com",
      databaseURL: "https://kwitter-a4669-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4669",
      storageBucket: "kwitter-a4669.appspot.com",
      messagingSenderId: "469284139354",
      appId: "1:469284139354:web:8ae959ac636f5d7b10c363"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
