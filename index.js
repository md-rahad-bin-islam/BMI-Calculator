const btn = document.getElementById("calculateBtn");

btn.addEventListener("click", function () {
    let height = document.querySelector("#heightInput").value;
    let weight = document.querySelector("#weightInput").value;

    //check empty input
    if (height == "" || weight == "") {

        alert("Please fill out the input fields!");

    }
    // The BMI formula is: BMI = weight (kg) / (height (m) * height (m)).
    else {
        height = height / 100;
        let BMI = (weight / (height * height)).toFixed(2);

        document.querySelector("#result").innerHTML = BMI;

        let status = "";

        //check basic BMI categories
        if (BMI < 18.5) {
            status = "Underweight";
        } else if (BMI >= 18.5 && BMI < 25) {
            status = "Healthy";
        } else if (BMI >= 25 && BMI < 30) {
            status = "Overweight";
        } else if (BMI >= 30) {
            status = "Obese";
        }
        document.querySelector(".comment").innerHTML = `You are <span id="comment">${status}</span>`;
    }

});