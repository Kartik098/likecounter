let sum = function(param1){
    let b = function(param2){
        let c = function(param3){
            let add = param1 + param2 + param3;
            console.log(add);
        }
        return c
    }
    return b;
}
sum(10)(20)(35);
var counter = 0;  
function like(){
    counter+=1;
    
    let like = document.getElementById("para");
    like.innerText = counter
    
}
function unlike(){
    counter-=1;
    let unlike = document.getElementById("para");
    unlike.innerText =counter
    
}