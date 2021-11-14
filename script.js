// Get the form
// Make a function where if the submit button is pressed a new div pops up saying the form is submitted.
// Make the form disappear after another click
// Stretch - make the pop up appear and disappear niceley


// Targets
const form = document.querySelector('form');
const popUpDiv = document.querySelector('.submitPopUp')
const popUpButton = document.createElement('button')



// Function - to activate the pop up when submit button on form is clicked
function formSubmit (e) {
    e.preventDefault(); //Prevent auto behaviour
    const nameEl = document.getElementById('name').value; //getting the values of the inputs
    const emailEl = document.getElementById('email').value;
    const messageEl = document.getElementById('message').value;

    // Add info to popUpDiv:
    const popUpHeading = document.createElement('h4');
    const popUpPara = document.createElement('p');
    popUpHeading.textContent = "Thank you for contacting us!";
    popUpPara.textContent = "Rest assured we have received your message and we will contact you back shortly with a reply!";
    popUpButton.textContent = "Close";
    popUpDiv.appendChild(popUpHeading); //Appending the text to the parent of popUpDiv
    popUpDiv.appendChild(popUpPara);
    popUpDiv.appendChild(popUpButton);

    if(! nameEl || emailEl || messageEl) {
        
    }

    if(nameEl && emailEl && messageEl) {
        // If all three inputs are filled out, the following code is created:
        popUpDiv.classList.add("popUpFadeIn");
        popUpDiv.style.position = "absolute";
        popUpDiv.style.top = "40%";
        popUpDiv.style.left = "30%";
        popUpDiv.style.textAlign = "center";
        popUpDiv.style.padding = "3%";
        popUpDiv.style.width = "40%";
        popUpDiv.style.backgroundColor = "#FAFAFA";
        popUpDiv.style.border = "10px solid #FDFA69";
        popUpDiv.style.borderRadius = "5%";
        popUpButton.style.padding = "10px";
        popUpButton.style.marginTop = "20px";
        popUpButton.style.fontFamily = "Playfair Display";
        popUpButton.style.backgroundColor = "#4CEEA7";
        popUpButton.classList.add("popUpButton");
        

        // clear the input fields of the form:
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('message').value = ''

    } else if (!nameEl){
        document.getElementById('name').style.border = "2px solid red"; //red border is added if input is not filled out
    } else if (!emailEl){
        document.getElementById('email').style.border = "2px solid red";
    } else if (!messageEl){
        document.getElementById('message').style.border = "2px solid red";
    }
    
}

// Register the events
form.addEventListener('submit', formSubmit)
popUpButton.addEventListener('click', closePopUpF)

// Function - to close the pop up afterwards
function closePopUpF () {
    popUpDiv.classList.add("closePopUpC");
}

