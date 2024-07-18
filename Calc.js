document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('unit-conversion-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let FromUnit = document.getElementById("from-unit").value;
        let ToUnit = document.getElementById("to-unit").value;
        let amount = parseFloat((document.getElementById("amount")).value);
        let result = 0;

        // Perform conversion based on FromUnit and ToUnit
        if (FromUnit === ToUnit) {
            result = amount;
        } else if (FromUnit === "meters") {
            if (ToUnit === "centimeters") {
                result = amount * 100;
            } else if (ToUnit === "kilometers") {
                result = amount / 1000;
            } else if (ToUnit === "inches") {
                result = amount * 39.3701;
            } else if (ToUnit === "feet") {
                result = amount * 3.28084;
            } else if (ToUnit === "acres") {
                result = amount / 4046.86;
            }
        } else if (FromUnit === "centimeters") {
            if (ToUnit === "meters") {
                result = amount / 100;
            } else if (ToUnit === "kilometers") {
                result = amount / 100000;
            } else if (ToUnit === "inches") {
                result = amount / 2.54;
            } else if (ToUnit === "feet") {
                result = amount / 30.48;
            } else if (ToUnit === "acres") {
                result = amount / 4046856;
            }
        } else if (FromUnit === "kilometers") {
            if (ToUnit === "meters") {
                result = amount * 1000;
            } else if (ToUnit === "centimeters") {
                result = amount * 100000;
            } else if (ToUnit === "inches") {
                result = amount * 39370.1;
            } else if (ToUnit === "feet") {
                result = amount * 3280.84;
            } else if (ToUnit === "acres") {
                result = amount * 247.105;
            }
        } else if (FromUnit === "inches") {
            if (ToUnit === "meters") {
                result = amount / 39.3701;
            } else if (ToUnit === "centimeters") {
                result = amount * 2.54;
            } else if (ToUnit === "kilometers") {
                result = amount / 39370.1;
            } else if (ToUnit === "feet") {
                result = amount / 12;
            } else if (ToUnit === "acres") {
                result = amount / 6272640;
            }
        } else if (FromUnit === "feet") {
            if (ToUnit === "meters") {
                result = amount / 3.28084;
            } else if (ToUnit === "centimeters") {
                result = amount * 30.48;
            } else if (ToUnit === "kilometers") {
                result = amount / 3280.84;
            } else if (ToUnit === "inches") {
                result = amount * 12;
            } else if (ToUnit === "acres") {
                result = amount / 43560;
            }
        } else if (FromUnit === "acres") {
            if (ToUnit === "meters") {
                result = amount * 4046.86;
            } else if (ToUnit === "centimeters") {
                result = amount * 404685.6;
            } else if (ToUnit === "kilometers") {
                result = amount / 247.105;
            } else if (ToUnit === "inches") {
                result = amount * 6272640;
            } else if (ToUnit === "feet") {
                result = amount * 43560;
            }
        }

        // Display the result
        document.getElementById("result").textContent = result.toFixed(5);
    });
});
