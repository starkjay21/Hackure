const body = document.getElementById('cont')
const name = document.getElementById('name')
const age = document.getElementById('age')
const bloodGroup = document.getElementById('BG')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const gender = document.querySelectorAll('.gender')
const rbc = document.getElementById('RBC')
const hemo = document.getElementById('hemo')
const hematocrit = document.getElementById('hematocrit')
const wbc = document.getElementById('WBC')
const platelet = document.getElementById('platelet')
const submitBtn = document.getElementById('submit')
const resultCont = document.getElementById('result-container')

let bmi
let assessbmi
let assessrbc
let assesshemo
let assesshemato
let assesswbc
let assessplatelet

submitBtn.addEventListener('click', () => {
    var heightval =  parseInt(document.getElementById('height').value);
    var weightval =  parseInt(document.getElementById('weight').value);
    var rbcval =  parseFloat(document.getElementById('RBC').value);
    var hemoval =  parseFloat(document.getElementById('hemo').value);
    var hematoval =  parseFloat(document.getElementById('hematocrit').value);
    var wbcval =  parseFloat(document.getElementById('WBC').value);
    var plateletval =  parseFloat(document.getElementById('platelet').value);

    bmi = (weightval*10000.0)/((heightval)*(heightval));
    console.log(heightval, weightval);
    const gen = document.querySelector('input[name="gender"]:checked').value
    if(bmi >= 35){
        assessbmi = "Extremely Obese"
    }
    else if(bmi >= 30){
        assessbmi = "Obese"
    }
    else if(bmi >= 25){
        assessbmi = "Overweight"
    }
    else if(bmi >= 18.5){
        assessbmi = "Normal"
    }
    else{
        assessbmi = "Underweight"
    }
    if(gen === "M"){
        //RBC
        if(rbcval > 5.65){
            assessrbc = "HIGH"
        }
        else if(rbcval >= 4.35){
            assessrbc = "NORMAL"
        }
        else{
            assessrbc = "LOW"
        }
        //Hemoglobin
        if(hemoval > 16.6){
            assesshemo = "HIGH"
        }
        else if(hemoval >= 13.2){
            assesshemo = "NORMAL"
        }
        else{
            assesshemo = "LOW"
        }
        //Hematocrit
        if(hematoval > 48.6){
            assesshemato = "HIGH"
        }
        else if(hematoval >= 38.3){
            assesshemato = "NORMAL"
        }
        else{
            assesshemato = "LOW"
        }
        //WBC
        if(wbcval > 9.6){
            assesswbc = "HIGH"
        }
        else if(wbcval >= 3.4){
            assesswbc = "NORMAL"
        }
        else{
            assesswbc = "LOW"
        }
        //Platelet
        if(plateletval > 317){
            assessplatelet = "HIGH"
        }
        else if(plateletval >= 135){
            assessplatelet = "NORMAL"
        }
        else{
            assessplatelet = "LOW"
        }
    }
    else{
        //RBC
        if(rbcval > 5.13){
            assessrbc = "HIGH"
        }
        else if(rbcval >= 3.92){
            assessrbc = "NORMAL"
        }
        else{
            assessrbc = "LOW"
        }
        //Hemoglobin
        if(hemoval > 15){
            assesshemo = "HIGH"
        }
        else if(hemoval >= 11.6){
            assesshemo = "NORMAL"
        }
        else{
            assesshemo = "LOW"
        }
        //Hematocrit
        if(hematoval > 44.9){
            assesshemato = "HIGH"
        }
        else if(hematoval >= 35.5){
            assesshemato = "NORMAL"
        }
        else{
            assesshemato = "LOW"
        }
        //WBC
        if(wbcval > 9.6){
            assesswbc = "HIGH"
        }
        else if(wbcval >= 3.4){
            assesswbc = "NORMAL"
        }
        else{
            assesswbc = "LOW"
        }
        //Platelet
        if(plateletval > 371){
            assessplatelet = "HIGH"
        }
        else if(plateletval >= 157){
            assessplatelet = "NORMAL"
        }
        else{
            assessplatelet = "LOW"
        }

    }

    body.innerHTML=`

    <h1 size="0.7rem">Test Result</h1>
    <h2>Name: ${name.value}</h2>
    <h2>Age: ${parseInt(age.value)}</h2>
    <h2>Gender: ${gen}</h2>
    <h2>Blood Group: ${bloodGroup.value}</h2>
    <h2>Height: ${heightval}</h2>
    <h2>Weight: ${weightval}</h2>
    <br>
    <h2>BMI Result: ${assessbmi}</h2>
    <h2>Red Blood Cell Count:  ${assessrbc}</h2>
    <h2>Hemoglobin: ${assesshemo}</h2>
    <h2>Hematocrit: ${assesshemato}</h2>
    <h2>White Blood Cell Count: ${assesswbc}</h2>
    <h2>Platelet Count: ${assessplatelet}</h2>
    <br>
    `

    body.style.border = "0.3rem solid orange"
    body.style.margin = "4%";
})
