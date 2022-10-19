// Array Visualizer

//HTML Variables
let containerE1 =  document.getElementById("container");


// Global Variable 
let myData = [];
for (let n=1; n <= 50; n++){
    myData.push(Math.random() * 600);
}
console.log(myData);
// Display Data 
drawArray();

function drawArray (){
    let outputStr = "";
    for (let i = 0; i< myData.length; i++){
       outputStr += `<div style = "height:${myData[i]}px"> </div>`
    }
    containerE1.innerHTML = outputStr; 
}

// Key Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event){
// Modify the array...
    myData[0] = 600;
}