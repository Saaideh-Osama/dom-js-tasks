 
function verifyPassword(){
   var pw = document.getElementById("password1").value;
    var pw2=document.getElementById("password2").value;
if(pw.length < 6) {
 document.getElementById("pw1_check").innerHTML = "Password length must be atleast 6 characters";
return false;
}
if(pw!==pw2){
document.getElementById("pass_check").innerHTML = "Password not matching";
return false;
}}