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

seven.addEventListener("click", function () {

    if (display.innerHTML == 0) {
        display.innerHTML = seven.innerHTML
        console.log(seven.innerHTML);
    } else {
        display.innerHTML = display.innerHTML + seven.innerHTML
        console.log(seven.innerHTML);
    }
})


eight.addEventListener("click", function () {
    if (display.innerHTML == 0) {
        display.innerHTML = eight.innerHTML
        console.log(eight.innerHTML);
    } else if (display != 0) {
        display.innerHTML += eight.innerHTML
        console.log(eight.innerHTML);
    } else {

        console.log(eight.innerHTML);
    }
    // display.innerHTML += eight.innerHTML
})
nine.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = nine.innerHTML
        console.log(nine.innerHTML);
    } else if (display != 0) {
        display.innerHTML += nine.innerHTML
        console.log(nine.innerHTML);
    } else {

        console.log(eight.innerHTML);
    }
})
add.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = add.innerHTML
        console.log(add.innerHTML);
    } else if (display != 0) {
        display.innerHTML += add.innerHTML
        console.log(add.innerHTML);
    } else {

        console.log(add.innerHTML);
    }
})
four.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = four.innerHTML
        console.log(four.innerHTML);
    } else if (display != 0) {
        display.innerHTML += four.innerHTML
        console.log(four.innerHTML);
    } else {

        console.log(four.innerHTML);
    }
})
five.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = five.innerHTML
        console.log(five.innerHTML);
    } else if (display != 0) {
        display.innerHTML += five.innerHTML
        console.log(five.innerHTML);
    } else {

        console.log(five.innerHTML);
    }
})
six.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = six.innerHTML
        console.log(six.innerHTML);
    } else if (display != 0) {
        display.innerHTML += six.innerHTML
        console.log(six.innerHTML);
    } else {

        console.log(six.innerHTML)
    }
})
divide.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = divide.innerHTML
        console.log(divide.innerHTML);
    } else if (display != 0) {
        display.innerHTML += divide.innerHTML
        console.log(divide.innerHTML);
    } else {

        console.log(divide.innerHTML)
    }
})
one.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = one.innerHTML
        console.log(one.innerHTML);
    } else if (display != 0) {
        display.innerHTML += one.innerHTML
        console.log(one.innerHTML);
    } else {

        console.log(one.innerHTML)
    }
})
two.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = two.innerHTML
        console.log(two.innerHTML);
    } else if (display != 0) {
        display.innerHTML += two.innerHTML
        console.log(two.innerHTML);
    } else {

        console.log(two.innerHTML)
    }
})
three.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = three.innerHTML
        console.log(three.innerHTML);
    } else if (display != 0) {
        display.innerHTML += three.innerHTML
        console.log(three.innerHTML);
    } else {

        console.log(three.innerHTML)
    }
})
multiple.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = multiple.innerHTML
        console.log(multiple.innerHTML);
    } else if (display != 0) {
        display.innerHTML += multiple.innerHTML
        console.log(multiple.innerHTML);
    } else {

        console.log(multiple.innerHTML)
    }
})
zero.addEventListener("click", function () {
    if (display == 0) {
        display.innerHTML = zero.innerHTML
        console.log(zero.innerHTML);
    } else if (display != 0) {
        display.innerHTML += zero.innerHTML
        console.log(zero.innerHTML);
    } else {

        console.log(zero.innerHTML)
    }
})

C.addEventListener("click", function () {
    console.log("C")
})
iqual.addEventListener("click", function () {

})
less.addEventListener("click", function () {
    buttonPressed("-")
    console.log("-")
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