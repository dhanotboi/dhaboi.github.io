function changeNav(){
  if (document.getElementById("mySidenav").style.width == "300px"){
    document.getElementById("mySidenav").style.width = "75px";
    document.getElementById("main").style.marginLeft = "85px";
  } else {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "310px";
  }
  var text = document.getElementById("inivsible");
  if (text.style.display == "none") {
    text.style.display = "inline-block";
  } else {
    text.style.display = "none";
  }
}
