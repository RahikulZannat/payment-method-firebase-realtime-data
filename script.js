    // Initialize Firebase with your configuration
    var config = {
        apiKey: "AIzaSyCbTGZWMRbV6W_EsVCOirJ2qqrNRiH-76g",
        authDomain: "nestedforms-83ca2.firebaseapp.com",
        databaseURL: "https://nestedforms-83ca2-default-rtdb.firebaseio.com",
        projectId: "nestedforms-83ca2",
        storageBucket: "nestedforms-83ca2.appspot.com",
        messagingSenderId: "966306937980",
        appId: "1:966306937980:web:bc60d7215bce30f9771df9"
      
      };
      firebase.initializeApp(config);
  
      // Reference to the Firebase Realtime Database
      var dbRef = firebase.database().ref();
  
      // Get references to the buttons
      var ledOnButton = document.getElementById("ledOn");
      var ledOffButton = document.getElementById("ledOff");
  
      // Add click event listeners to the buttons
      ledOnButton.addEventListener("click", function() {
        dbRef.update({ ledStatus: "on" });
      });
  
      ledOffButton.addEventListener("click", function() {
        dbRef.update({ ledStatus: "off" });
      });
  