function changeNav(){
  if document.getElementById("mySidenav").stye.width == "220px"{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  } else {
    document.getElementById("mySidenav").style.width = "220px";
    document.getElementById("main").style.marginLeft = "240px";
  }
}
/* old and bad functions, no one likes these get if statements lOL.
function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "240px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
*/
