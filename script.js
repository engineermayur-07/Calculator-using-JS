let display = document.getElementById('display');

function appendToDisplay(input){
  display.value += input;
}
function allClear(){
  display.value="";
}
function calculate(){
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value="Error.";
  }
  
}