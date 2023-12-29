let lowerData = "abcdefghijklmnopqrstuvwxyz";
let upperData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberData = "1234567890";
let symbolData = "!@#$%^&*()_+><:";


let input = document.getElementById("passwordinput");
let passwordlength = document.getElementById("passwordlength");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");

function generatepassword(data) {
    // console.log(data[Math.floor(Math.random()*data.length)]);
    return data[Math.floor(Math.random() * data.length)];
}

function generate(password = "") {
    if (uppercase.checked) {
        password += generatepassword(upperData);
    }
    if (lowercase.checked) {
        password += generatepassword(lowerData);
    }
    if (number.checked) {
        password += generatepassword(numberData);
    }
    if (symbol.checked) {
        password += generatepassword(symbolData);
    }
    if (password.length < passwordlength.value) {
        return generate(password);
    }
    input.value = password;
    console.log(password);
}
function myFun() {
    generate()

}
