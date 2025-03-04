let input = document.querySelector("#number");
let button = document.querySelector(".check");
let para = document.querySelector("#isprime");

let input2 = document.querySelector("#range");
let div = document.querySelector(".append");
let btn2 = document.querySelector("#print");
let para2 = document.querySelector(".total");
let btn3 = document.querySelector(".reset");

// Function to check if a number is prime
function isprime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Event listener for the button click
button.addEventListener("click", function () {
    let number = input.valueAsNumber;

    if (isNaN(number)) {
        para.textContent = "Please enter a valid number.";
        return;
    }

    if (isprime(number)) {
        para.textContent = `${number} is a prime number.`;
    } else {
        para.textContent = `${number} is not a prime number.`;
    }
});

// Event listener for the print button
btn2.addEventListener("click", function () {
    let number = input2.valueAsNumber;
    let count = 0;

    // Clear previous list items
    div.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        if (isprime(i)) {
            count++;
            let ol = document.createElement("ul");
            let li = document.createElement("li");
            div.appendChild(ol);
            ol.append(li);
            li.innerText = i;
        }
    }
    para2.classList.remove("hide");
    para2.innerText = `Total prime numbers from 1 to ${number} is: ${count}`;
});

// Event listener for the reset button
btn3.addEventListener("click", function () {
    // Clear input fields
    input.value = "";
    input2.value = "";

    // Clear text content of paragraphs
    para2.textContent = "";
    para.textContent = "";

    // Remove dynamically created list items
    div.innerHTML = "";
    para2.classList.add("hide");
});