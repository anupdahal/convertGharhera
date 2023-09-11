const buttons = document.querySelectorAll('.button');
const contents = document.querySelectorAll('.content');

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                contents[index].classList.add('active');
            });
        });

// By default, making the "Bigga" section and its content active
    buttons[0].click();

// Geting the total width of content2
    const content2Width = document.getElementById("content2").offsetWidth;

// Calculating the width for each input field
    const inputFields = document.querySelectorAll(".contents .input-field");
    const widthPerInput = content2Width / inputFields.length;

// Applying the width to all input fields
    inputFields.forEach(inputField => {
    inputField.style.width = widthPerInput + "px";
    });


    
function bigga(){

        const ropaniout = document.getElementById("ropaniout");
        const biggaout = document.getElementById("biggaout");
        const squaremeterout = document.getElementById("squaremeterout");
        const squrefeetout = document.getElementById("squrefeetout");
    
        // Get the values from input fields
        const biggaInput = document.getElementById("bigga").value.trim();
        const katthInput = document.getElementById("katth").value.trim();
        const dhurInput = document.getElementById("dhur").value.trim();
    
  
    
        // If all inputs are valid, perform the calculation
        const biggaValue = parseFloat(biggaInput);
        const katthValue = parseFloat(katthInput);
        const dhurValue = parseFloat(dhurInput);
    
        // Display the result
        biggaout.innerHTML = `${biggaValue} Bigga ${katthValue} Kattha ${dhurValue} Dhur `;
    
   
let biggaformeter = (biggaValue * ((182.25*20)*20));
let katthaformeter = (katthValue * (182.25*20));
let dhurformeter = (dhurValue * 182.25);
let totalSquremeter = (biggaformeter + katthaformeter + dhurformeter);

squrefeetout.innerHTML = `${totalSquremeter} Square Meter `

let biggaforfeet = (biggaValue * 6772.6287);
let katthaforfeet = (katthValue * 338.6314);
let dhurforfeet = (dhurValue * 16.9316);
let totalSqurefeet = (biggaforfeet + katthaforfeet + dhurforfeet);

squaremeterout.innerHTML = `${totalSqurefeet} Square Meter `
}




function ropani(){


const ropaniout = document.getElementById("ropaniout");
const squaremeterout = document.getElementById("squaremeterout");
const squrefeetout = document.getElementById("squrefeetout");
const biggaout = document.getElementById("biggaout");

const ropaniValue = parseFloat(document.getElementById("ropani").value);
const anaValue = parseFloat(document.getElementById("ana").value);
const paisaValue = parseFloat(document.getElementById("paisa").value);
const damValue = parseFloat(document.getElementById("dam").value);

ropaniout.innerHTML = `${ropaniValue} Ropani ${anaValue} Ana ${paisaValue} Paisa ${damValue} Dam `


let ropaniformeter = (ropaniValue * 508.72 );
let anaformeter = (anaValue * ( 31.80));
let paisaformeter = (paisaValue * 7.95);
let damformeter = (damValue * 1.99);
let totalSquremeter = (ropaniformeter + anaformeter + paisaformeter + damformeter);

squaremeterout.innerHTML = `${totalSquremeter} Square Meter `

let ropaniforfeet = (ropaniValue * 5476 )
let anaforfeet = (anaValue * 342.25);
let paisaforfeet = (paisaValue *  85.56);
let damforfeet = (damValue * 21.39);
let totalSqurefeet = (ropaniforfeet + anaforfeet + paisaforfeet + damforfeet);

squrefeetout.innerHTML = `${totalSqurefeet} Square Feet`
}



function squaremeter(){
    const ropaniout = document.getElementById("ropaniout");
    const biggaout = document.getElementById("biggaout");
    const squaremeterout = document.getElementById("squaremeterout");
    const squrefeetout = document.getElementById("squrefeetout");
    
    const squaremeterValue = parseFloat(document.getElementById("squaremeter").value);

    

    squaremeterout.innerHTML = `${squaremeterValue} Square Meter`


    let forsquarefeet = (squaremeterValue * 10.76);
    squrefeetout.innerHTML = `${forsquarefeet} Square Meter`


if (squaremeterValue === "") {
    // Handle the case when squaremeterValue is blank
} else {
    let data = squaremeterValue / 338.63;

    if (data < 19) {
        let katthakovalue = data;
        let katthakomannevalue = Math.floor(katthakovalue);

        let dhorkovalue = katthakovalue - katthakomannevalue;
        let dhorkomannevalue = (dhorkovalue * 20).toFixed(2);

        biggaout.innerHTML = `${katthakomannevalue} Kattha ${dhorkomannevalue} Dhur`;
    } else {
        let biggarawvalue = data;
        let biggaactualvalue = biggarawvalue / 20;
        let bigghafloorvalue = Math.floor(biggaactualvalue);

        let kathaRawValue = (biggaactualvalue - bigghafloorvalue) * 20;
        let kathaActualValue = Math.floor(kathaRawValue);

        let dhorRawValue = (kathaRawValue - kathaActualValue) * 20;
        let dhorActualValue = dhorRawValue.toFixed(2);

        biggaout.innerHTML = `${bigghafloorvalue} Biggha ${kathaActualValue} Kattha ${dhorActualValue} Dhur`;
    }
}









if (squaremeterValue === "") {
    // Handle the case when squaremeterValue is blank
} if(squaremeterValue / 1.99 < 7.95) {
    let data = squaremeterValue / 1.99;

    if (data < 7.95) {            // this is for dam
        let damvlu = data;
        let dammainvlu = Math.floor(damvlu);

        ropaniout.innerHTML = `${dammainvlu} Dam`;
    }
}else {
    let data = squaremeterValue / 31.80;

    if (data < 31.80) {
        let anakovalue = data;
        let anakomannevalue = Math.floor(anakovalue);

        let paisakovalue = anakovalue - anakomannevalue;
        let paisakomannevalue = (paisakovalue * 20).toFixed(2);

        ropaniout.innerHTML = `${anakomannevalue} Ana ${paisakomannevalue} Paisa`;
    } 
    
    else {
        let data = squaremeterValue / 31.80;

        let ropanirawvalue = data;
        // alert(ropanirawvalue);
        let ropaniactualvalue = ropanirawvalue / 16;
        let ropanifloorvalue = Math.floor(ropaniactualvalue);

        let anaRawValue = (ropaniactualvalue - ropanifloorvalue) / 4;
        let anaActualValue = Math.floor(anaRawValue);
        
        let paisaRawValue = (anaActualValue - ropananaRawValueifloorvalue) / 4;
        let paisaActualValue = Math.floor(anaRawValue);

        let damRawValue = (paisaActualValue - paisaRawValue);
        let damActualValue = damRawValue.toFixed(2);

        ropaniout.innerHTML = `${ropanifloorvalue} Ropani ${anaActualValue} Ana ${paisaActualValue} Paisa ${damActualValue} Dam`;
    }

}
}



    // else {
    //     let biggarawvalue = data;
    //     let biggaactualvalue = biggarawvalue / 20;
    //     let bigghafloorvalue = Math.floor(biggaactualvalue);

    //     let kathaRawValue = (biggaactualvalue - bigghafloorvalue) * 20;
    //     let kathaActualValue = Math.floor(kathaRawValue);

    //     let dhorRawValue = (kathaRawValue - kathaActualValue) * 20;
    //     let dhorActualValue = dhorRawValue.toFixed(2);

    //     biggaout.innerHTML = `${bigghafloorvalue} Biggha ${kathaActualValue} Kattha ${dhorActualValue} Dhur`;





    function squarefeet(){
        const ropaniout = document.getElementById("ropaniout");
        const biggaout = document.getElementById("biggaout");
        const squaremeterout = document.getElementById("squaremeterout");
        const squrefeetout = document.getElementById("squrefeetout");
        
        const squarefeetValue = parseFloat(document.getElementById("squarefeet").value);
      
        squrefeetout.innerHTML = `${squarefeetValue} Square Meter`



        let forsquaremeter = (squarefeetValue * 10.76);
        squaremeterout.innerHTML = `${forsquaremeter} Square Meter`



// for bigga kattha dhur section
        if (squarefeetValue === "") {
            // Handle the case when squaremeterValue is blank
        } else {
            let data = squarefeetValue / 3645;
        
            if (data < 19) {
                let katthakovalue = data;
                let katthakomannevalue = Math.floor(katthakovalue);
        
                let dhorkovalue = katthakovalue - katthakomannevalue;
                let dhorkomannevalue = (dhorkovalue * 20).toFixed(2);
        
                biggaout.innerHTML = `${katthakomannevalue} Kattha ${dhorkomannevalue} Dhur`;
            } else {
                let biggarawvalue = data;
                let biggaactualvalue = biggarawvalue / 20;
                let bigghafloorvalue = Math.floor(biggaactualvalue);
        
                let kathaRawValue = (biggaactualvalue - bigghafloorvalue) * 20;
                let kathaActualValue = Math.floor(kathaRawValue);
        
                let dhorRawValue = (kathaRawValue - kathaActualValue) * 20;
                let dhorActualValue = dhorRawValue.toFixed(2);
        
                biggaout.innerHTML = `${bigghafloorvalue} Biggha ${kathaActualValue} Kattha ${dhorActualValue} Dhur`;
            }
        }
        }



        
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const button3 = document.getElementById("button3");
        const button4 = document.getElementById("button4");

        const ropaniout = document.getElementById("ropaniout");
        const biggaout = document.getElementById("biggaout");
        const squaremeterout = document.getElementById("squaremeterout");
        const squrefeetout = document.getElementById("squrefeetout");

        button1.addEventListener("click", function() {
            // Clear the input fields by setting their values to an empty string
            
            ropaniout.innerHTML = "0 Ropani 0 Aana 0 Paisa 0 Dam"
            biggaout.innerHTML = "0 Bigga 0 Kattha 0 Dhur"
            squaremeterout.innerHTML = "0.0000 Square Meter"
            squrefeetout.innerHTML = "0.0000 Square Feet"
          });

          button2.addEventListener("click", function() {
            ropaniout.innerHTML = "0 Ropani 0 Aana 0 Paisa 0 Dam"
            biggaout.innerHTML = "0 Bigga 0 Kattha 0 Dhur"
            squaremeterout.innerHTML = "0.0000 Square Meter"
            squrefeetout.innerHTML = "0.0000 Square Feet"
          });

          button3.addEventListener("click", function() {
            // Clear the input fields by setting their values to an empty string
            ropaniout.innerHTML = "0 Ropani 0 Aana 0 Paisa 0 Dam"
            biggaout.innerHTML = "0 Bigga 0 Kattha 0 Dhur"
            squaremeterout.innerHTML = "0.0000 Square Meter"
            squrefeetout.innerHTML = "0.0000 Square Feet"
          });

          button4.addEventListener("click", function() {
            // Clear the input fields by setting their values to an empty string
            ropaniout.innerHTML = "0 Ropani 0 Aana 0 Paisa 0 Dam"
            biggaout.innerHTML = "0 Bigga 0 Kattha 0 Dhur"
            squaremeterout.innerHTML = "0.0000 Square Meter"
            squrefeetout.innerHTML = "0.0000 Square Feet"
          });