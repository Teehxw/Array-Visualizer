// Array Visualizer

//HTML Variables
let containerE1 =  document.getElementById("container");


// Global Variable 
let myData = [400, 500, 250, 100, 550, 300];

// Display Data 
drawArray();

function drawArray (){
    let outputStr = "";
    for (let i = 0; i< myData.length; i++){
       outputStr += `<div>${myData[i]}</div>`
    }
    containerE1.innerHTML = outputStr; 
}