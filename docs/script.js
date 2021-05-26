function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function (e) {
        document.getElementById('detail').style.display = "box";
    })

    elements[i].addEventListener('mouseout', function (e) {
        document.getElementById('detail').style.display = "none";
    })
}