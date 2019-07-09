$(document).ready(function(){
   // alert("po")
    var getactivity=  JSON.parse(localStorage.getItem('ActivityLog'));
    for(var i=0;i<getactivity.length;i++)
        {
            var res=getactivity[i];
            $(".asection").append('<p class="paratxt">'+res.Datetimes+'</p><div class="awrapper1"><i class="fa fa-search alike" aria-hidden="true"></i><p class="apostdetail">'+res.Title+'</p><img class="asamplepost" src="../images/propic.jpg" alt="samplepost"><p class="asampledes">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>')
        }
    //lastname = JSON.parse(sessionStorage.getItem("loginuser"));
    
})