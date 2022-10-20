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
    if(event.keyCode === 38){
        let middleIndex = Math.floor(myData.length / 2); 
        //Up arrow - Add 600 to the index 0
        myData.splice(middleIndex  , 0, Math.random() * 600);
    } else if (event.keyCode=== 40){
        // Down Arrow -Remove element from middle
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 1 )
    }

    // if(event.keyCode === 38){
    //     //Up arrow - Push the value to the end of the array
    //     myData.push(Math.random()* 600);
    // } else if (event.keyCode=== 40){
    //     // Down Arrow - Push the value to the end of the array
    //     let poppedValue = myData.pop();
    //     console.log(poppedValue);
    // }


     
    // redraw the Array
    drawArray();
}