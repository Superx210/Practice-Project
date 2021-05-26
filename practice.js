//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAFepwcKbPxrfP4RuO-XG7H9b8J2q3X4aw",
    authDomain: "practice-project-a03a0.firebaseapp.com",
    projectId: "practice-project-a03a0",
    storageBucket: "practice-project-a03a0.appspot.com",
    messagingSenderId: "898032398638",
    appId: "1:898032398638:web:f9ba249f0e039fa35bcabf",
    measurementId: "G-2D3RLFNGV7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function addUser() {
    user_bame = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}