let alphabets = [
  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z"]; 

let symbols = 
["~",  "`",  "!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "_",  "-",  "+",  "=",  "{",  "[",  "}",  "]",  ",",  "|",  ":",  ";",  "<",  ">",  ".", "?",  "/",]

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let choices = [0,1,2,3];

let password1 = "";
let password2 = "";
let p1Var = "";
let p2Var = "";

let p1El = document.getElementById("kButton1");
let p2El = document.getElementById("kButton2");
let footEl = document.getElementById("footer");
let cpy1Success = document.getElementById("leftSuccess");
let cpy2Success = document.getElementById("rightSuccess");

let clickedInitially = false;

function generateKey()
{
  clickedInitially = true;
  password1 = "";
  password2 = "";
  footEl.textContent = "click on any button to copy to clipboard";
  cpy1Success.textContent = "";
  cpy2Success.textContent = "";

  for (let i = 0; i < 15; i ++) 
  {
    let decision = Math.floor(Math.random() * 4);

    if (decision === 1) {
      p1Var = Math.floor(Math.random() * alphabets.length);
      password1 += alphabets[p1Var];

      p2Var = Math.floor(Math.random() * alphabets.length);
      password2 += alphabets[p2Var];
    } 
    else if (decision === 0) 
    {
      p1Var = Math.floor(Math.random() * alphabets.length);
      password1 += alphabets[p1Var].toUpperCase();

      p2Var = Math.floor(Math.random() * alphabets.length);
      password2 += alphabets[p2Var].toUpperCase();
    } 
    else if (decision === 2) 
    {
      p1Var = Math.floor(Math.random() * symbols.length);
      password1 += symbols[p1Var];

      p2Var = Math.floor(Math.random() * symbols.length);
      password2 += symbols[p2Var];
    } 
    else if (decision === 3)
    {
      p1Var = Math.floor(Math.random() * numbers.length);
      password1 += numbers[p1Var];

      p2Var = Math.floor(Math.random() * numbers.length);
      password2 += numbers[p2Var];
    }
  }
  p1El.textContent = password1;
  p2El.textContent = password2;
}


function copy1()
{
  if(clickedInitially)
  {
    let copyText = password1;
    navigator.clipboard.writeText(copyText);
    footEl.textContent = "";
    cpy1Success.textContent = "✅ copied to clipboard";
    cpy2Success.textContent = "";

  }
}

function copy2()
{
  if(clickedInitially)
  {
    let copyText = password2;
    navigator.clipboard.writeText(copyText);
    footEl.textContent = "";
    cpy2Success.textContent = "✅ copied to clipboard";
    cpy1Success.textContent = "";
  }
}
