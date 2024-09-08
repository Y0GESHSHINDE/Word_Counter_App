function CharCount(){
   var textarea = document.getElementById("userInput");
   var text = textarea.value;
   // console.log(typeof text);
   document.getElementById("Char").innerHTML=text.length;
   numbersCount(text);
}

function numbersCount(text){
   let count =0;
   for(let value of text){
      if(!isNaN(Number(value)) && value.trim() !== ""){
         count++;
      }
   }

   document.getElementById("Number").innerHTML= count;
}