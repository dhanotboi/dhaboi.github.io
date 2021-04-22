function changeNav(){
  if (document.getElementById("mySidenav").style.width == "300px"){
    document.getElementById("mySidenav").style.width = "65px";
    document.getElementById("main").style.marginLeft = "75px";
  } else {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "310px";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "240px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "65px";
  document.getElementById("main").style.marginLeft= "55px";
}
