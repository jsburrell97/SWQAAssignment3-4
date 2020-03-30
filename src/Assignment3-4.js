function showBMI() {
    let x = document.getElementById("initial_selection");
    let y = document.getElementById("BMI_calculator");
    x.style.display = "none";
    y.style.display = "";
}

function showRetirement(){
    let x = document.getElementById("initial_selection");
    let y = document.getElementById("retirement_age_calculator");
    x.style.display = "none";
    y.style.display = "";
}

function resetPage(){
    location.reload();
}

function calculateBMI(){
    //reset error messages on resubmit.
    document.getElementById("error_message_height").innerHTML = "";
    document.getElementById("error_message_weight").innerHTML = "";

    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inches").value;
    let weight = document.getElementById("weight").value;
    let error = false;

    //If an input is not blank and does not contain a decimal, convert it to a number.
    if(!(feet === "") && !feet.includes("."))
        feet = Number(feet);
    if(!(inches === "") && !inches.includes('.'))
        inches = Number(inches);
    if(!(weight === "") && !weight.includes('.'))
        weight = Number(weight);

    if((!Number.isInteger(feet) || !Number.isInteger(inches)) || (feet <= 0 || inches <= 0)){
        error = true;
        document.getElementById("error_message_height").innerHTML = "Please input the feet and inches" +
            " as integers greater than 0.";
    }

    if(!Number.isInteger(weight) || weight <= 0){
        error = true;
        document.getElementById("error_message_weight").innerHTML = "Please input the weight as an integer " +
            "greater than 0";
    }

    if(!error){
        feet = feet * 12;
        inches = inches + feet;
        let meters = inches * 0.025;
        let kilograms = weight * 0.45;
        let BMI = kilograms/(Math.pow(meters, 2));
        BMI = BMI.toFixed(1);

        if(BMI < 18.5)
            document.getElementById("calculated_BMI").innerHTML = "Your BMI is " + BMI + " which means you " +
                "are underweight.";
        else if(18.5 <= BMI && BMI < 25)
            document.getElementById("calculated_BMI").innerHTML = "Your BMI is " + BMI + " which means you " +
                "are normal weight.";
        else if(25 <= BMI && BMI < 30)
            document.getElementById("calculated_BMI").innerHTML = "Your BMI is " + BMI + " which means you " +
                "are overweight.";
        else
            document.getElementById("calculated_BMI").innerHTML = "Your BMI is " + BMI + " which means you " +
                "are obese.";
    }
}

function calculateRetirement(){
    //reset error messages on resubmission.
    document.getElementById("error_message_age").innerHTML = "";
    document.getElementById("error_message_salary").innerHTML = "";
    document.getElementById("error_message_percent").innerHTML = "";
    document.getElementById("error_message_goal").innerHTML = "";

    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let percentSaved = document.getElementById("percent_saved").value;
    let savingsGoal = document.getElementById("savings_goal").value;
    let error = false;

    if(!(age === "") && !age.includes('.'))
        age = Number(age);
    if(!(salary === "") && !salary.includes('.'))
        salary = Number(salary);
    if(!(percentSaved === "") && !percentSaved.includes('.'))
        percentSaved = Number(percentSaved);
    if(!(savingsGoal === "") && !savingsGoal.includes('.'))
        savingsGoal = Number(savingsGoal);

    if(!Number.isInteger(age) || age <= 0){
        error = true;
        document.getElementById("error_message_age").innerHTML = "Please input your age as an integer " +
            "greater than 0!";
    }

    if(!Number.isInteger(salary) || salary <= 0){
        error = true;
        document.getElementById("error_message_salary").innerHTML = "Please input your salary as an integer" +
            " greater than 0!";
    }

    if(!Number.isInteger(percentSaved) || percentSaved <= 0){
        error = true;
        document.getElementById("error_message_percent").innerHTML = "Please input your percentage saved as " +
            "an integer greater than 0!";
    }

    if(!Number.isInteger(savingsGoal) || savingsGoal <= 0){
        error = true;
        document.getElementById("error_message_goal").innerHTML = "Please input your savings goal as an " +
            "integer greater than 0!";
    }

    if(!error){
        percentSaved = percentSaved/100;
        let amountSavedPerYear = (salary * percentSaved) * 1.35;
        let yearsToRetirement = savingsGoal/amountSavedPerYear;
        let retirementAge = age + yearsToRetirement;
        retirementAge = retirementAge.toFixed(0);

        if(retirementAge < 100){
            document.getElementById("calculated_retirement").innerHTML = "You will be " + retirementAge +
                " when you meet your savings goal."
        }
        else{
            document.getElementById("calculated_retirement").innerHTML = "You will not meet your savings" +
                "goal";
        }
    }
}