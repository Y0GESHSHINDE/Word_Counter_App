function CharCount(){
   var textarea = document.getElementById("userInput");
   var text = textarea.value;
   console.log(text);
   document.getElementById("Char").innerHTML=text.length;
   
}