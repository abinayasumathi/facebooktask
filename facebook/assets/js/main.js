$(document).ready(function(){
    localStorage.setItem("userinfo", JSON.stringify(users));
    //var retrieveData = JSON.parse(localStorage.getItem("userinfo"))
    var arrayval = JSON.parse(localStorage.getItem("userinfo"));
    console.log(arrayval)

    
//console.log(retrieveData[0].startbool)
    //document.write(today);
})
var validateArray = {};
var currentActivity = 0;
var i;
var lastname;
var sessionBool = true;
var myLunch = {
	sandwich: 'turkey',
	chips: 'bbq'
};
function login(){
    var arr = ["abinaya","anu","sumathi"]
    var password = ["Abinaya@123","Anu@123","Sumathi@123"]
    validateArray.password = $("#password").val();
    validateArray.email = $("#email").val();
   
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();   
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = date +' - '+time;



    var retrieveData = JSON.parse(localStorage.getItem("userinfo"))
    lastname = JSON.parse(sessionStorage.getItem("loginuser"));

    var getactivity=  JSON.parse(localStorage.getItem('ActivityLog'));
    if(getactivity == null){
        getactivity=[];
    }
    var datas={Title:'Login',Datetimes:datetime};
    
        var getIndexvalue = arr.indexOf(validateArray.email);
      var getarrayname = arr[getIndexvalue];
      var getpasswordarr = password.indexOf(validateArray.password);
      var getarragetpassword = password[getpasswordarr];
      console.log(arr.indexOf(validateArray.email))
      console.log(arr[arr.indexOf(validateArray.email)])
        //validation
        if(validateArray.email == getarrayname && validateArray.password == getarragetpassword){
            getactivity.push(datas);
            localStorage.setItem('ActivityLog',JSON.stringify(getactivity));
          //  localStorage.setItem('loginuser', JSON.stringify(existing));
            //console.log()
            sessionStorage.setItem("loginuser",JSON.stringify(retrieveData[getIndexvalue]));
            window.location.href = "assets/html/profilepage.html";
        }
        else{
            $(".hover_bkgr_fricc").show();
        }

    // for(i=0; i<retrieveData.length; i++){  
    //    if(validateArray.email == retrieveData[i].username && validateArray.password == retrieveData[i].password){
    //     var ass = sessionStorage.setItem("loginuser",JSON.stringify(retrieveData[i]));
    //             localStorage.setItem("particularuser", JSON.stringify(retrieveData[i]));
    //             var today = new Date();
    //             var dd = String(today.getDate()).padStart(2, '0');
    //             var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //             var yyyy = today.getFullYear();
    //             today = mm + '/' + dd + '/' + yyyy;
    //             lastname['session'] = today;
    //             lastname["Date"] = dd;
    //             var ass = sessionStorage.setItem("loginuser",JSON.stringify(lastname));
    //             window.location.href = "assets/html/profilepage.html";

    //     }
    //     else{
    //         setTimeout(function(){
    //             $(".hover_bkgr_fricc").show();
    //         },0)
           
    //     }
    // }
    
   // console.log(retrieveData[i])

}
function popupCloseButton(){
    $(".hover_bkgr_fricc").hide();
}
function currentActivity(value){
console.log(value)
}
function data(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today)
}
function logOut(){
    sessionStorage.removeItem("loginuser");
    sessionStorage.clear();
    document.location.href = "/index.html";
}