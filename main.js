// Array Visualizer

//HTML Variables
let containerE1 =  document.getElementById("container");


// Global Variable 
let myData = [600, 350, 250, 550, 100, 300, 600, 100, 100];

// Display Data 
drawArray();

function drawArray (){
    let outputStr = "";
    for (let i = 0; i< myData.length; i++){
       outputStr += `<div style = "height:${myData[i]}px"> </div>`
    }
    containerE1.innerHTML = outputStr; 
}