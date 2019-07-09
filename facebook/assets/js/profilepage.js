$(document).ready(function(){
    var datagetLocal = JSON.parse(localStorage.getItem("particularuser"));
    var lastname = JSON.parse(sessionStorage.getItem("loginuser"));
   // var datagetLocal = JSON.parse(localStorage.getItem("particularuser"));
    
   // var searchparam = new URLSearchParams(window.location.search);
    console.log(currentActivity)
    $(".editproname").html(lastname.username);
    $(".pcollege").html(lastname.college);
    $(".pschool").html(lastname.school);
    $(".post").html(lastname.currentorganisation);
    $(".prole").html(lastname.currentjobrole);
    $(".birthdaycity").html(lastname.birthdaycity);
    $(".currentcity").html(lastname.currentcity);
});

function usereditpage(){
    console.log("usereditpage");
    window.location.href = "editpage.html";
}
function activitylog(){
    window.location.href="activitylog.html";
}
function logOut(value){
    alert("sessionTimeout"+value);
    window.location.href="/index.html";
}

function datetime(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
}
