var datagetLocal1, lastname;
$(document).ready(function(){
    activeClick()
    datagetLocal1 = JSON.parse(localStorage.getItem("particularuser"));
    lastname = JSON.parse(sessionStorage.getItem("loginuser"));
    console.log(lastname.username)
    $("#eusername").val(lastname.username)
    $("#ebirthcity").val(lastname.birthdaycity)
    $("#ecurrentcity").val(lastname.currentcity)
    $("#estate").val(lastname.state)
    $("#ecountry").val(lastname.country)
   
    /************** College Details */
    $("#ecollege").val(lastname.college)
    $("#eschool").val(lastname.school)
   
    /**Work Details */ 
    $("#ework").val(lastname.currentjobrole)
    $("#eorganisation").val(lastname.currentorganisation)

    $(".box").off("click").on("click",eusertoggle).css({"cursor":"pointer"});
    
    // var eusername = $("#eusername").val()
});
function eusertoggle(){
   var getId =  $(this).attr("id").split("_")[1];
   $(".euseredit").hide();
   $(".ewholewrapper"+getId).show();
}
function savechanges(){
  // param = ["abinaya","anu","sumathi"];
    var eusername = $("#eusername").val()
    var ebirthcity = $("#ebirthcity").val()
    var ecurrentcity = $("#ecurrentcity").val()
    var estate = $("#estate").val()
    var ecountry = $("#ecountry").val()
    var ecollege = $("#ecollege").val()
    var eschool = $("#eschool").val()
    var ework = $("#ework").val()
    var eorganisation = $("#eorganisation").val()
   // eusername = datagetLocal1.username;
   //console.log(JSON.parse(datagetLocal1))
   //datagetLocal1.username = "eusername";

   //localStorage.setItem("particularuser", datagetLocal1.username)
  // localStorage.setItem("userinfo", JSON.stringify(users));
 // datagetLocal1.username = 'soda';
  //param.push(eusername);
  console.log(lastname.username)
  lastname.username = eusername;
  lastname.birthdaycity = ebirthcity;
  lastname.currentcity = ecurrentcity;
  lastname.state = estate;
  lastname.country = ecountry;
  lastname.college = ecollege;
  lastname.school = eschool;
  lastname.currentjobrole = ework;
   
  lastname.currentorganisation = eorganisation;
  localStorage.setItem("particularuser", JSON.stringify(datagetLocal1))
  sessionStorage.setItem("loginuser", JSON.stringify(lastname))
  window.location.href="profilepage.html";
  //datagetLocal1.username = param[0];
    //console.log("savechanges"+datagetLocal1.username, param[0]);
}
function activeClick(){
    var btns = document.getElementsByClassName("box");
    console.log(btns)
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
    }
}