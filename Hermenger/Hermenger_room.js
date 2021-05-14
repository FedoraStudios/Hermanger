var firebaseConfig = {
      apiKey: "AIzaSyAEGTemYjXU19fs4LDFyYjAjZkrCn-tp9o",
      authDomain: "hermanger-84ca1.firebaseapp.com",
      projectId: "hermanger-84ca1",
      storageBucket: "hermanger-84ca1.appspot.com",
      messagingSenderId: "936241416337",
      appId: "1:936241416337:web:56b844b500b7bdbb2f9730"
    };
   
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + ".";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.dataBase().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "Hermenger_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class'room_name' id ="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Hermenger_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "Hermenger.html";
}
