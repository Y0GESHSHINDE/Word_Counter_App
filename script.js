function CharCount() {
   var textarea = document.getElementById("userInput");
   var text = textarea.value;
   // console.log(typeof text);
   document.getElementById("Char").innerHTML = text.length;
   numbersCount(text);
}

function numbersCount(text) {
   let count = 0;
   for (let value of text) {
      if (!isNaN(Number(value)) && value.trim() !== "") {
         count++;
      }
   }

   document.getElementById("Number").innerHTML = count;
   // console.log(count);
   countWords(text)
}


function countWords(str) {
   let str1 = str.trim();
   let str2 = str1.split(" ");
   document.getElementById("Words").innerHTML=str2.length;
}


function clearText(){
   document.getElementById("userInput").value="";
   document.getElementById("Char").innerHTML = 0;
   document.getElementById("Number").innerHTML = 0;
   document.getElementById("Words").innerHTML=0;



}