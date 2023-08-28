var firebaseConfig = {
      apiKey: "AIzaSyAC-GWGSy3p_aTLka2kQ1YHNn3ohyhEfBA",
      authDomain: "kwitter-b308f.firebaseapp.com",
      databaseURL: "https://kwitter-b308f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b308f",
      storageBucket: "kwitter-b308f.appspot.com",
      messagingSenderId: "1024256892645",
      appId: "1:1024256892645:web:62d8882fb3932d39fb3e0c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     room_name = localStorage.getItem("room_name");
     user_name = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}