var block_A = document.querySelector("#block_A");
var block_B = document.querySelector("#block_B");
var block_C = document.querySelector("#block_C");
var block_D = document.querySelector("#block_D");
var diamond = document.querySelector("#diamond");

var progress = 0;
timer = setInterval(fram, 50);


function fram(){
    progress++;
    $(".load").css("top", progress );
    $(".loadtext").text(progress  + "%");
    if(progress >= 60){
        
        $(".loadpage").css("opacity","0");
    }
    if(progress >= 100){
    clearInterval(timer);
    $(".loadpage").css("display","none");
    }
    
}


block_A.onmouseenter = function(){
    no_Size()
    block_A.classList.add("block_A");
    block_B.classList.add("block_B");
    block_C.classList.add("block_C");
    block_D.classList.add("block_D");
    diamond.style.left = 'calc(70% - 9rem)';
    diamond.style.top = 'calc(70% - 9rem)';

};

block_B.onmouseenter = function(){
    no_Size()
    block_A.classList.add("block_B");
    block_B.classList.add("block_A");
    block_C.classList.add("block_D");
    block_D.classList.add("block_C");
    diamond.style.left = 'calc(30% - 9rem)';
    diamond.style.top = 'calc(70% - 9rem)';

};

block_C.onmouseenter = function(){
    no_Size()
    block_A.classList.add("block_C");
    block_B.classList.add("block_D");
    block_C.classList.add("block_A");
    block_D.classList.add("block_B");
    diamond.style.left = 'calc(70% - 9rem)';
    diamond.style.top = 'calc(30% - 9rem)';

    
};
block_D.onmouseenter = function(){
    no_Size()
    block_A.classList.add("block_D");
    block_B.classList.add("block_C");
    block_C.classList.add("block_B");
    block_D.classList.add("block_A");
    diamond.style.left = 'calc(30% - 9rem)';
    diamond.style.top = 'calc(30% - 9rem)';

};

function no_Size(){
    block_A.classList.remove("block_A","block_B","block_C","block_D","diamond_move")
    block_B.classList.remove("block_A","block_B","block_C","block_D","diamond_move")
    block_C.classList.remove("block_A","block_B","block_C","block_D","diamond_move")
    block_D.classList.remove("block_A","block_B","block_C","block_D","diamond_move")
}
function initMap() {
    // The location of Uluru
    var uluru = {lat: 25.074362, lng: 121.547079};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru,styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"color":"#444345"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"weight":"0.50"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#fbebcd"},{"saturation":"100"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#f6d9b5"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#fbebcd"},{"lightness":"-10"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"color":"#fbebcd"},{"lightness":"-10"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#fbebcd"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#64a49a"}]}]
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }




    

