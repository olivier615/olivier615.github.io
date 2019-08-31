var Hongkong = document.querySelector("#Hongkong");
var Malaysia = document.querySelector("#Malaysia");
var Japan = document.querySelector("#Japan");
var content = document.querySelector("#content");
var city_name = document.querySelector("#city_name");




;
$("#Hongkong").click(function(){
    no_Order()
    otr_pic()
    $("#Hongkong").addClass("pos_3");
    $("#Malaysia").addClass("pos_1");
    $("#Japan").addClass("pos_2");
    city_name.innerHTML = "Hongkong";
    otr_pic()
    show_hon()


    
})

$("#Malaysia").click(function(){
    no_Order()
    $("#Malaysia").addClass("pos_3");
    $("#Hongkong").addClass("pos_2");
    $("#Japan").addClass("pos_1");
    city_name.innerHTML = "Malaysia";
    otr_pic()
    show_mal()


    
    
})

$("#Japan").click(function(){
    no_Order()
    $("#Japan").addClass("pos_3");
    $("#Hongkong").addClass("pos_1");
    $("#Malaysia").addClass("pos_2");
    $("#city_name").innerHTML = "Japan";
    city_name.innerHTML = "Japan";
    otr_pic()
    show_jap()


    
})

function otr_pic(){
    $("#pic_Japan").fadeOut(1000);
    $("#pic_Malaysia").fadeOut(1000);
    $("#pic_Hongkong").fadeOut(1000);
}

function show_jap(){
    $("#pic_Japan").fadeIn(2000);
    $(".location").css("backgroundColor","#c0106e80");
    $("#location_1_1").text("Tokyo");
    $("#location_1_2").text("Osaka");
    $("#location_1_3").text("Hokkaido");
    
    
}
function show_mal(){
    $("#pic_Malaysia").fadeIn(2000);
    $(".location").css("backgroundColor","#b6c11480");
    $("#location_1_1").text("George Town");
    $("#location_1_2").text("Kuala Lumpur");
    $("#location_1_3").text("Ipoh");
  
}
function show_hon(){
    $("#pic_Hongkong").fadeIn(2000);
    $(".location").css("backgroundColor","#186bbd80");
    $("#location_1_1").text("Kowloon Tong");
    $("#location_1_2").text("Mongkok");
    $("#location_1_3").text("Admiralty");

}

$(function(){
    $(".nav_box").click(function(){
        $(".phone_nav").slideToggle("slow");
      
      });});




// Malaysia.onclick = function(){
//     no_Order()
//     this.classList.add("pos_3");
//     Japan.classList.add("pos_1");
//     Hongkong.classList.add("pos_2");
//     content.style.backgroundImage = "url('./Malaysia/bac.jpg')";
//     city_name.innerHTML = "Malaysia";
// };
// Hongkong.onclick = function(){
//     no_Order()
//     this.classList.add("pos_3");
//     Malaysia.classList.add("pos_1");
//     Japan.classList.add("pos_2");
//     content.style.backgroundImage = "url('./Hongkong/bac.jpg')";
//     city_name.innerHTML = "Hongkong";
// }

// Japan.onclick = function(){
//     no_Order()
//     this.classList.add("pos_3");
//     Malaysia.classList.add("pos_2");
//     Hongkong.classList.add("pos_1");
//     content.style.backgroundImage = "url('./Japan/bac.jpg')";
//     city_name.innerHTML = "Japan";
// };



// removeALL_order

function no_Order(){
    Hongkong.classList.remove("pos_3","pos_2","pos_1")
    Malaysia.classList.remove("pos_3","pos_2","pos_1")
    Japan.classList.remove("pos_3","pos_2","pos_1")
}



