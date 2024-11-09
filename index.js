console.log("working");
//let buttons = document.querySelectorAll("#button")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let add = document.querySelector("#add")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let divide = document.querySelector("#divide")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let multiple = document.querySelector("#multiple")
let zero = document.querySelector("#zero")
let C = document.querySelector("#C")
let iqual = document.querySelector("#iqual")
let less = document.querySelector("#less")
let display = document.querySelector(".display")

function updateDisplay(n) {
    if (display.innerHTML == oldNumbers) {
        display.innerHTML = 0;
    }




    if (display.innerHTML == 0) {
        display.innerHTML = n;
    } else {
        display.innerHTML += n;
    }
}

seven.addEventListener("click", function () {
    updateDisplay(seven.innerHTML)
})

eight.addEventListener("click", function () {
    updateDisplay(eight.innerHTML)
})
nine.addEventListener("click", function () {
    updateDisplay(nine.innerHTML)
})


let oldNumbers;

add.addEventListener("click", function () {
    //almacenar los numeros viejos en una variable 
    oldNumbers = display.innerHTML;
    console.log(oldNumbers);
})
four.addEventListener("click", function () {
    updateDisplay(four.innerHTML)
})
five.addEventListener("click", function () {
    updateDisplay(five.innerHTML)
})
six.addEventListener("click", function () {
    updateDisplay(six.innerHTML)
})
divide.addEventListener("click", function () {
    oldNumbers = display.innerHTML;
    console.log(oldNumbers);

})
one.addEventListener("click", function () {
    updateDisplay(one.innerHTML)
})
two.addEventListener("click", function () {
    updateDisplay(two.innerHTML)
})
three.addEventListener("click", function () {
    updateDisplay(three.innerHTML)
})
multiple.addEventListener("click", function () {
    oldNumbers = display.innerHTML;
    console.log(oldNumbers);

})
zero.addEventListener("click", function () {
    updateDisplay(zero.innerHTML)
})

C.addEventListener("click", function () {
    display.innerHTML = 0;
})

iqual.addEventListener("click", function () {
    // let addTotal = Number(oldNumbers) + Number(display.innerHTML);
    // console.log(addTotal);
    // display.innerHTML = addTotal;

    // let lessTotal = Number(oldNumbers) - Number(display.innerHTML);
    // console.log(addTotal);
    // display.innerHTML = lessTotal;

    // let divideTotal = Number(oldNumbers) / Number(display.innerHTML);
    // console.log(addTotal);
    // display.innerHTML = divideTotal;

    let multipleTotal = Number(oldNumbers) * Number(display.innerHTML);
    console.log(multipleTotal);
    display.innerHTML = multipleTotal;


})
less.addEventListener("click", function () {
    oldNumbers = display.innerHTML;
    console.log(oldNumbers);

})
// console.log(seven);
// console.log(eight);
// console.log(nine);
// console.log(add);
// console.log(four);
// console.log(five);
// console.log(six);
// console.log(divide);
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(multiple);
// console.log(zero);
// console.log(C);
// console.log(iqual);
// console.log(less);

function buttonPressed(btn) {
    console.log(btn);
}


//console.log(buttons);

//paso 1) modifiquen el display
//display=numero apretado
//display.innerhtml=numero apretado