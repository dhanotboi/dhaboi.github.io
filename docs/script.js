function changeNav(){
  var indiv = document.getElementById('invisible');
  var div = document.getElementById('visible');

  if (document.getElementById("mySidenav").style.width == "220px"){
    div.classList.add('invisible')
    div.classList.remove('visible')
    document.getElementById("mySidenav").style.width = "55";
    document.getElementById("main").style.marginLeft= "65";
  }
  if (document.getElementById("mySidenav").style.width == "35px"){
    indiv.classList.add('visible')
    indiv.classList.remove('invisible');
    document.getElementById("mySidenav").style.width = "220px";
    document.getElementById("main").style.marginLeft = "230px";
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
