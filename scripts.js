function validateForm() {
    var emailexpression = new RegExp("/\S+@\S+\.\S+/");
    if (document.forms["form"]["firstname"].value == (null || "") ||
    document.forms["form"]["lastname"].value == (null || "") ||
    document.forms["form"]["email"].value == (null || "") ||
    document.forms["form"]["verifyemail"].value == (null || "")){
        alert("All fields are required.");
        return false;
    }else if(emailexpression.test(document.forms["form"]["email"].value == false)){
        alert("Email address: " + document.forms["form"]["email"].value + " is invalid.");
        return false;
    } else if(document.forms["form"]["email"].value != document.forms["form"]["verifyemail"].value){
        alert("Email addresses do not match.");
        return false;
    }else{
        alert("Success! We'll send you your Kool-Aid immediately! Have a happy afterlife!");
        return true;
    }
}