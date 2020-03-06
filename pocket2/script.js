
// var box = document.getElementById("square")


// for (var i = 1; i <= 50; i++){
// 	var result = i;
// 	console.log (result);

// 	var rotation = 'transform: translateY(10rem)';

// 	var runThis = '<div class="square" style"${rotation}"></div>'
// 	;

// 	BOX.insertAdjacentHTML('afterend',runThis)

// }


// var box = document.createElement('div')
 
// box.classList.add("square")
// console.log("box")

// for (var i = 1; i <= 50; i++){
// 	var result = i;
// 	console.log (result)

// 	// var rotation = 'transform: translateY(10rem)';

// 	// var runThis = '<div class="square" style"${rotation}"></div>'
// 	// ;



// 	document.body.appendChild(box); 

// }

var r1 = document.getElementById("r1")
for (var i = 0; i<=20; i++)
{

console.log(i)

var box = document.createElement("div")
box.classList.add("square")

box.style.transform = "rotate(" + i*2 + "deg)"

r1.appendChild(box);


}

var r2 = document.getElementById("r2")
for (var i = 0; i<=20; i++)
{

console.log(i)

var box = document.createElement("div")
box.classList.add("square")

box.style.transform = "rotate(" + i*3 + "deg)"

r2.appendChild(box);


}


var r3 = document.getElementById("r3")
for (var i = 0; i<=20; i++)
{

console.log(i)

var box = document.createElement("div")
box.classList.add("square")

box.style.transform = "rotate(" + i*4 + "deg)"

r3.appendChild(box);


}


var r4 = document.getElementById("r4")
for (var i = 0; i<=20; i++)
{

console.log(i)

var box = document.createElement("div")
box.classList.add("square")

box.style.transform = "rotate(" + i*5 + "deg)"

r4.appendChild(box);


}












