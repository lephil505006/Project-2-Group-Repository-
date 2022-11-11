function checkempty() {
    var fname = document.forms["contactForm"]["firstname"].value
    var lname = document.forms["contactForm"]["lastname"].value
    var number = document.forms["contactForm"]["phone"].value
    var email = document.forms["contactForm"]["email"].value
    var address = document.forms["contactForm"]["address"].value

    if((!fname) || (!lname) || (!number) || (!email) || (!address) ) {
        alert("Please fill out the required fields");
        return false;
    }
}