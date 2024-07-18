document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('unit-conversion-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let FromUnit = document.getElementById("from-unit").value;
        let ToUnit = document.getElementById("to-unit").value;
        let amount = parseFloat(document.getElementById("amount").value);
        let result = 0
//g
        if (FromUnit == "grams" && ToUnit == "grams") {
            result = amount;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "grams" && ToUnit == "kilograms") {
            result = amount / 1000;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "grams" && ToUnit == "pounds") {
            result = amount * 0.00220462;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "grams" && ToUnit == "ounces") {
            result = amount * 0.035274;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "grams" && ToUnit == "milligrams") {
            result = amount * 1000;
            document.getElementById("result").textContent = result.toFixed(5);
        }
//kg
        if (FromUnit == "kilograms" && ToUnit == "grams") {
            result = amount * 1000;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "kilograms" && ToUnit == "kilograms") {
            result = amount;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "kilograms" && ToUnit == "pounds") {
            result = amount * 2.20462;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "kilograms" && ToUnit == "ounces") {
            result = amount * 35.274;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "kilograms" && ToUnit == "milligrams") {
            result = amount * 1000000;
            document.getElementById("result").textContent = result.toFixed(5);
        }

//pounds
        if (FromUnit == "pounds" && ToUnit == "grams") {
            result = amount * 453.592;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "pounds" && ToUnit == "kilograms") {
            result =  amount * 0.453592;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "pounds" && ToUnit == "pounds") {
            result = amount;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "pounds" && ToUnit == "ounces") {
            result = amount * 16;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "pounds" && ToUnit == "milligrams") {
            result = amount * 453592;
            document.getElementById("result").textContent = result.toFixed(5);
        }

//ounces
        if (FromUnit == "ounces" && ToUnit == "grams") {
            result = amount * 28.3495;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "ounces" && ToUnit == "kilograms") {
            result = amount * 0.0283495;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "ounces" && ToUnit == "pounds") {
            result = amount * 0.0625;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "ounces" && ToUnit == "ounces") {
            result = amount;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "ounces" && ToUnit == "milligrams") {
            result = amount * 28349.5;
            document.getElementById("result").textContent = result.toFixed(5);
        }
//mg
        if (FromUnit == "milligrams" && ToUnit == "grams") {
            result = amount / 1000;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "milligrams" && ToUnit == "kilograms") {
            result = amount / 1000000;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "milligrams" && ToUnit == "pounds") {
            result = amount * 0.00000220462;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "milligrams" && ToUnit == "ounces") {
            result = amount * 0.000035274;
            document.getElementById("result").textContent = result.toFixed(5);
        }
        if (FromUnit == "milligrams" && ToUnit == "milligrams") {
            result = amount;
            document.getElementById("result").textContent = result.toFixed(5);
        }
    });
});

