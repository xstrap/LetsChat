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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome" + user_name
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}