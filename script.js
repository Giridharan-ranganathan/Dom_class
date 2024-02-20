var div = document.createElement("div");
div.className = "col";

var firstName = document.createElement("label");
firstName.innerHTML = "FirstName";

var middleName = document.createElement("label");
middleName.innerHTML = "middleName";

var lastName = document.createElement("label");
lastName.innerHTML = "lastName";

var email = document.createElement("label");
email.innerHTML = "email";


div.append(firstName,middleName,lastName,email);
document.body.append(div);
console.log(div);
