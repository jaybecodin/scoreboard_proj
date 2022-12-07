var homeText = document.getElementById("home")
var a = 0

var guest = document.getElementById('guestScore')
var d = 0
 
function add1PointHome(){
  if (a < 9){
    a++;
    var ans = a 
    homeText.innerText = "0" + ans
  } else{
    add1Home();
  }
}
function add2PointHome(){
  if (a < 8){
    a++;
    a++;
    var ans = a 
    homeText.innerText = "0" + ans
  } else{
    add2Home();
  }
}
function add3PointHome(){
  if (a < 9){
    a++;
    a++;
    a++;
    var ans = a
    homeText.innerText = "0" + ans
  }else {
    add3home();
  }
  }



function add1PointGuest(){
  if (d < 9){
    d++;
    var ans = d 
    guest.innerText = "0" + ans
  } else{
    add1Guest();
  }
}
function add2PointGuest(){
  if (d < 8){
    d++;
    d++;
    var ans = d 
    guest.innerText = "0" + ans
  } else{
    add2Guest();
  }
}
function add3PointGuest(){
  if (d < 9){
    d++;
    d++;
    d++;
    var ans = d
    guest.innerText = "0" + ans
  }else {
    add3Guest();
  }
  }



function add1Home(){
  a++;
  var ans = a 
  homeText.innerText = ans
}

function add2Home(){
  a++;
  a++;
  var ans = a 
  homeText.innerText = + ans
 }


function add3home(){
  a++;
  a++;
  a++;
  var ans = a 
  homeText.innerText = ans
}


function add1Guest(){
  d++;
  var ans = d 
  guest.innerText = ans
}

function add2Guest(){
  d++;
  d++;
  var ans = d
  guest.innerText =  ans
 }


function add3Guest(){
  d++;
  d++;
  d++;
  var ans = d 
  guest.innerText = ans
}



// Ill figure out how to big brain this shit one day for now comment it out
// basically my htought process was something along the lines of if the class equals this the execute this code if not do this type shit
// function addButton(){
// if(a === 0 , b === 0 , c === 0){
//   console.log("Home");
//   } else{
//   console.log("guest");
// }
// }
// addButton()
