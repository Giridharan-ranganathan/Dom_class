function label_create(tagname,attrname,attvalue,content){
    var ele =document.createElement(tagname);
    ele.setAttribute(attrname,attvalue);
    ele.innerHtml=content
    return ele;
}

function break_create(){
    var ele = document.createElement("br");
    return ele;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(attr1name,attr1value);
    element.setAttribute(attr2name,attr2value);
    return element;
}


var firstname =label_create("label","for","firstname","FirstName");
var br = break_create();
var firstnameInpute = input_create("input","type","firstname","id","firstname");

var middlename =label_create("label","for","middlename","middlename");
var br = break_create();
var middlenameInput = input_create("input","type","middlename","id","middlename");

var lastname =label_create("label","for","lastname","lastname");
var br = break_create();
var lastnameInput = input_create("input","type","lastname","id","lastname");

var email =label_create("label","for","email","Email");
var br = break_create();
var emailInput = input_create("input","type","email","id","email");

var password =label_create("label","for","password","password");
var br = break_create();
var passwordInput = input_create("input","type","password","id","password");

document.body.append(firstname,br,firstnameInpute);
