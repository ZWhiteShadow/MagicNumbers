
// https://www.w3schools.com/js/js_arrays.asp 
var all = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 
var n1 = [], n2 = [], n4 = [], n8 = [],
   n16 = [], n32 =[], n64 =[], n128 =[], nAll = [], AllAry = [];
for (var a = 1; a <= 54; a++) {
// http://www.javascriptkit.com/javatutors/randomnum.shtml
// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
var Random = Math.floor(Math.random()*256) + 256; // Random number 
if (Random == 256){Random = 257};
var RandomNumber = (Random).toString(2) // Converts to binary
// https://stackoverflow.com/questions/9951500/javascriptstoring-values-in-array
for (var i = 0; i < RandomNumber.length; i++) {
	
        all[i] = RandomNumber.charAt(i)
	if (i == 8 && all[8] == 1) {n1[n1.length] = Random};
	if (i == 7 && all[7] == 1) {n2[n2.length] = Random};
	if (i == 6 && all[6] == 1) {n4[n4.length] = Random};
	if (i == 5 && all[5] == 1) {n8[n8.length] = Random};
	if (i == 4 && all[4] == 1) {n16[n16.length] = Random};
	if (i == 3 && all[3] == 1) {n32[n32.length] = Random};
	if (i == 2 && all[2] == 1) {n64[n64.length] = Random};
	if (i == 1 && all[1] == 1) {n128[n128.length] = Random};
				}
        nAll[nAll.length] = Random;
   } // End Random # Generator loop
   
DisplayNumbers(nAll);
document.getElementById('Button1').innerHTML = "I have choosen my number";
var NextScreen = .5;
var MyGuess = 256;
var Counter = 0;
function Start(){
NextNumber();
document.getElementById("Display2").innerHTML = "";
document.getElementById("Display3").innerHTML = "Is your number on the screen? <br> You are on screen " + Counter + " of 8";
document.getElementById('Button1').innerHTML = "Yes I see my number";
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_create
var x = document.createElement("BUTTON");
  var t = document.createTextNode("NO it is NOT there");
  x.appendChild(t);
  x.id ='Button2';
  document.body.appendChild(x); 
//https://stackoverflow.com/questions/5303899/change-onclick-action-with-a-javascript-function
document.getElementById("Button1").onclick = Yes;
document.getElementById("Button2").onclick = NextNumber;
}
function Yes(){
MyGuess += NextScreen;
NextNumber();
}
function NextNumber(){
Counter += 1;
document.getElementById("Display3").innerHTML = "Is your number on the screen? <br> You are on screen " + Counter + " of 8";
if (Counter == 9){End(); }
if (NextScreen == .5) {DisplayNumbers(n1); }
if (NextScreen == 1) {DisplayNumbers(n2); }
if (NextScreen == 2) {DisplayNumbers(n4); }
if (NextScreen == 4) {DisplayNumbers(n8); }
if (NextScreen == 8) {DisplayNumbers(n16); }
if (NextScreen == 16)  {DisplayNumbers(n32); }
if (NextScreen == 32)  {DisplayNumbers(n64); }
if (NextScreen == 64) {DisplayNumbers(n128); }
NextScreen *= 2;
}
function End(){
document.getElementById("Display1").innerHTML = "";
document.getElementById("Display2").innerHTML = "<h1>" + "Your Number Is: " + MyGuess + "</h1>" ;
document.getElementById("Display3").innerHTML = "";
document.getElementById('Button1').style.visibility = 'hidden';
document.getElementById('Button2').style.visibility = 'hidden';
document.getElementById("Table").innerHTML = "";
}
//https://stackoverflow.com/questions/3481491/is-there-any-way-i-can-print-string-array-without-using-for-loop  
function DisplayNumbers(x){
document.getElementById("Display1").innerHTML = "";
document.getElementById("Table").innerHTML = "";
var table = document.getElementById("Table");
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow
var rowCount = table.rows.length;
var row = table.insertRow(rowCount);
var newRow = 0;
// https://stackoverflow.com/questions/15866451/how-to-insert-row-at-end-of-table-with-htmltableelement-insertrow
for (var i = 0; i < (x.length); i++ ) {
  if (i % 6 == 0 && i != 0 ){
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    newRow += 1;
    }
  var cell1 = row.insertCell(i - (newRow * 6));
      // https://www.quora.com/How-can-I-change-the-color-of-inner-HTML-var-value-text-with-JavaScript
// http://w3schools-fa.ir/colors/colors_wheels.html

if ( x[i] <= 284) {cell1.innerHTML = "<span style=\"color:#FF0000\">" + x[i] + "</span>"} //red
if ( x[i] > 284) {cell1.innerHTML = "<span style=\"color:#FF8000\">" + x[i] + "</span>"} //orange
if ( x[i] > 313) {cell1.innerHTML = "<span style=\"color:#FFFF00\">" + x[i] + "</span>"} //yellow
if ( x[i] > 341) {cell1.innerHTML = "<span style=\"color:#00FF00\">" + x[i] + "</span>"} //green
if ( x[i] > 370) {cell1.innerHTML = "<span style=\"color:#00FFFF\">" + x[i] + "</span>"} // cyan
if ( x[i] > 398) {cell1.innerHTML = "<span style=\"color:#ADD8E6\">" + x[i] + "</span>"} //light blue
if ( x[i] > 427) {cell1.innerHTML = "<span style=\"color:#4682bf \">" + x[i] + "</span>"} //blue
if ( x[i] > 455) {cell1.innerHTML = "<span style=\"color:#9932CC\">" + x[i] + "</span>"} //purple
if ( x[i] > 483) {cell1.innerHTML = "<span style=\"color:#FF00FF\">" + x[i] + "</span>"} //magenta
if ( x[i] > 512) {cell1.innerHTML = "<span style=\"color:#FF0080\">" + x[i] + "</span>"} //pink
  } 
}
