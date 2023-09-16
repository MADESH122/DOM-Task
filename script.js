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

var email=createlable("lable","for","email","Email");
var br1=br("br")
var input=inputele("input","text","email","id","email")
var br2=br("br")

document.body.append(email,br1,input,br2)