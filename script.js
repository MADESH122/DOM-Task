function createlable(tagname,attributename,attributevalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attributename,attributevalue)
ele.innerHTML=content;
return ele;
}
function inputele(tagname,attributename,attributevalue,attributename1,attributevalue1){
var inputele=document.createElement(tagname)
inputele.setAttribute(attributename,attributevalue);
inputele.setAttribute(attributename1,attributevalue1)
return inputele
}
function br(tagname){
    var res =document.createElement(tagname)
return res;
}



 
var Firstname=createlable("lable","for","Firstname","Firstname");
var br1=br("br")
var input=inputele("input","text","Firstname","id","Firstname")
var br2=br("br")
document.body.append(Firstname,br1,input,br2)
var Middlename=createlable("lable","for","Middlename","Middlename");
var br1=br("br")
var input=inputele("input","text","Middlename","id","Middlename")
var br2=br("br")
document.body.append(Middlename,br1,input,br2)

var Lastname=createlable("lable","for","Lastname","Lastname");
var br1=br("br")
var input=inputele("input","text","Middlename","id","Lastname")
var br2=br("br")
document.body.append(Lastname,br1,input,br2)

var email=createlable("lable","for","email","Email");
var br1=br("br")
var input=inputele("input","text","email","id","email")
var br2=br("br")


document.body.append(email,br1,input,br2)
 
var pin=createlable("lable","for","pin","pin");
var br1=br("br")
var input=inputele("input","text","pin","id","pin")
var br2=br("br")
document.body.append(pin,br1,input,br2)
