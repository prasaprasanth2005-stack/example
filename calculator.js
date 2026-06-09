const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            expression = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                expression = eval(expression);
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        } 
        else if (value === "±") {
            if (expression) {
                expression = (-parseFloat(expression)).toString();
                display.value = expression;
            }
        } 
        else {
            expression += value;
            display.value = expression;
        }
    });
});