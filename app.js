/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 24/07/2024 - 12:20:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/07/2024
    * - Author          : waeld
    * - Modification    : 
**/
let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT" , codes.value);
};
remove.onclick = ()=>{
    result.innerHTML = "";
    
}

onload = ()=>{
   codes.value =  localStorage.getItem("RESULT");
   result.innerHTML = codes.value;
}