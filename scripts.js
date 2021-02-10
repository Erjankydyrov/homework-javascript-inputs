// example-1
let example1 = document.querySelector("#exa1");
let text1 = document.querySelector("#h1");
example1.addEventListener("keyup", function(event) {
    if (example1.value.length == 0) {
        text1.innerText = " ";
    }
    if (example1.value.length > 5) {
        text1.innerText = "good";
    }
    
});
// example-1

// example-2

// example-2

// example-3

// example-3