var results = document.getElementById("result");
var display = document.getElementById("display");
var button = document.getElementById("buttons");

button.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const key = e.target.value;
        if (display.innerHTML !== "0") {
            switch (key) {
                case "=":
                    if (display.innerHTML !== "") {
                        results.innerHTML = eval(display.innerHTML);
                    };
                    break;
                case "C":
                    display.innerHTML = "";
                    results.innerHTML = "";
                    break;
                case "DEL":
                    display.innerHTML = display.innerHTML.slice(0, -1);
                    break;
                default:
                    display.innerHTML += key;
            };
        } else {
            display.innerHTML = key;
        };
    }
});