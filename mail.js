 const firebaseConfig = {
    apiKey: "AIzaSyBPARc8EY4ZZpblvjhcSmz4V1Fg2iLFhZY",
    authDomain: "contact-form-e8c9a.firebaseapp.com",
    databaseURL: "https://contact-form-e8c9a-default-rtdb.firebaseio.com",
    projectId: "contact-form-e8c9a",
    storageBucket: "contact-form-e8c9a.appspot.com",
    messagingSenderId: "843641813072",
    appId: "1:843641813072:web:f0ab25a91599890a943955"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // refrence your database
   var conatctFormDB= firebase.database().ref("contactForm");

   document.getElementById('contactForm').addEventListener("submit", submitform);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('Name')
    var name = getElementVal('email')
    var number= getElementVal('phone')
    var msgContent = getElementVal('msgcontent');

    saveMessages(name, email, msgcontent);
}
    
    const saveMessages  = (name, emailid, msgcontent) => {
        var newContactForm = contactFormDB.push();

        newContactForm.set({
            name: name,
            emailid: emailid;
            msgContent: msgContent
        })

}
    
const getElementVal = (id) => {
    return document.getElementById(id)value;
}