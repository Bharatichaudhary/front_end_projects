if (screen.width > 720) {

var left = 1;
var right = 3;
function show() {
  for (var i = left; i <= right; i++) {

    document.getElementById("c" + i).style.display = "inline-block";
    document.getElementById("a" + i).style.display = "inline-block";



  }
}
function moveleft()
{
    if (left <= 5 && right <= 8) {

document.getElementById("c" + left).style.display = "none";
left = left + 1;
right = right + 1;
for (i = left; i <= right; i++) {
document.getElementById("c" + i).style.display = "inline-block";

}
} else 
return;
}
function moveright() {
  if (left > 1 && right > 3 ) {

    document.getElementById("c" + right).style.display = "none";
    left = left - 1;
    right = right - 1;
    for (i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";

    }
  } else {
    return;
  }

}
function movleft()
{
    if (left <= 5 && right <= 8) {

document.getElementById("a" + left).style.display = "none";
left = left + 1;
right = right + 1;
for (i = left; i <= right; i++) {
document.getElementById("a" + i).style.display = "inline-block";

}
} else 
return;
}
function movright() {
  if (left > 1 && right > 3 ) {

    document.getElementById("a" + right).style.display = "none";
    left = left - 1;
    right = right - 1;
    for (i = left; i <= right; i++) {
      document.getElementById("a" + i).style.display = "inline-block";

    }
  } else {
    return;
  }

}
}



/*else if(screen.width<720){
    var i = 1;
function show() {

    document.getElementById("c" + i).style.display = "inline-block";
    document.getElementById("a" + i).style.display = "inline-block";



  
}
function moveleft()
{
    if (i < 9 ) {

document.getElementById("c" + i).style.display = "none";
i = i + 1;
document.getElementById("c" + i).style.display = "inline-block";


} else 
return;
}
function moveright() {
  if (i>1 ) {

    document.getElementById("c" + i).style.display = "none";
    i= i - 1;
      document.getElementById("c" + i).style.display = "inline-block";

    
  } else {
    return;
  }

}
function movleft()
{
    if (i < 8 ) {

document.getElementById("a" + i).style.display = "none";
i = i + 1;
document.getElementById("a" + i).style.display = "inline-block";


} else 
return;
}
function movright() {
  if (i>1 ) {

    document.getElementById("a" + i).style.display = "none";
    i= i - 1;
      document.getElementById("a" + i).style.display = "inline-block";

    
  } else {
    return;
  }

}
}*/
else{
  function show(){
    return;
  }
}