    // Initialize Firebase with your configuration
    var config = {
        apiKey: "AIzaSyCbTGZWMRbV6W_EsVCOirJ2qqrNRiH-76g",
        authDomain: "nestedforms-83ca2.firebaseapp.com",
        databaseURL: "httpsnestedforms-83ca2://nestedforms-83ca2-default-rtdb.firebaseio.com",
        projectId: "",
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

      ledOnButton.addEventListener("click", function() {
        dbRef.update({ ledStatus: "on" });
      
        // Set a timer to turn off the LED after 3 seconds
        setTimeout(function() {
          dbRef.update({ ledStatus: "off" });
        }, 3000); // 3000 milliseconds = 3 seconds
      });
  
      ledOffButton.addEventListener("click", function() {
        dbRef.update({ ledStatus: "off" });
      });

