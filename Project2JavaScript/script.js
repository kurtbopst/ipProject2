

function testLength(value, length, exactLength){
    if(exactLength){
        if(value.length == length){
            return true;
        }return false;
    }else{
        if(value.length >= length){
            return true;
        }return false;
    }
}

function testNumber(value){
    
  if(typeof value == 'number'){
      return true;
  }else if(typeof value == 'string'){
      value = value.toLowerCase();
      for(var i=0;i<value.length;i++){
        if(value[i] == '0' || value[i] == '1' || value[i] == '2' || value[i] == '3'|| value[i] == '4'|| value[i] == '5'|| value[i] == '6'
        || value[i] == '7'|| value[i] == '8' || value[i] == '9'){
            
        }else{
            return false;
        }
      }return true;
  }
  return false;
}

function updateForm(control){
    if(control == "creditCard"){
        document.getElementById('container').innerHTML =
    "First Name: <input type='text' id='firstName' required></br>" +
    "Last Name:  <input type='text' id='lastName'required></br>" +
    "Address: <input type='text' id='address' required></br>"+
"City:    <input type='text' id='city' required></br>" +
"Zip:    <input type='text' id='zip' required></br>" +
"Email Address:    <input type='text' id='email' required>   </br>" +
"Name on Card:   <input type='text' id='cardName' required>    </br>" +
"Card Number:    <input type='text' id='cardNum' required>    </br>" +
"<a href='https://en.wikipedia.org/wiki/Card_security_code' target='_blank'>CVV2/CVC</a>:  <input type='text' id='cvv' required></br>"
+
"State: <select id='state'>" +
    "<option selected hidden>Select State</option>"+
    "<option id='Alabama' value='Alabama'>Alabama</option>"+
"<option id='Alaska' value='Alaska'>Alaska</option>"+
"<option id='Arizona' value='Arizona'>Arizona</option>"+
"<option id='Arkansas' value='Arkansas'>Arkansas</option>"+
"<option id='California' value='California'>California</option>"+
"<option id='Colorado' value='Colorado'>Colorado</option>"+
"<option id='Connecticut' value='Connecticut'>Connecticut</option>"+
"<option id='Delaware' value='Delaware'>Delaware</option>"+
"<option id='Florida' value='Florida'>Florida</option>"+
"<option id='Georgia' value='Georgia'>Georgia</option>"+
"<option id='Hawaii' value='Hawaii'>Hawaii</option>"+
"<option id='Idaho' value='Idaho'>Idaho</option>"+
"<option id='Illinois' value='Illinois'>Illinois</option>"+
"<option id='Indiana' value='Indiana'>Indiana</option>"+
"<option id='Iowa' value='Iowa'>Iowa</option>"+
"<option id='Kansas' value='Kansas'>Kansas</option>"+
"<option id='Kentucky' value='Kentucky'>Kentucky</option>"+
"<option id='Louisiana' value='Louisiana'>Louisiana</option>"+
"<option id='Maine' value='Maine'>Maine</option>"+
"<option id='Maryland' value='Maryland'>Maryland</option>"+
"<option id='Massachusetts' value='Massachusetts'>Massachusetts</option>"+
"<option id='Michigan' value='Michigan'>Michigan</option>"+
"<option id='Minnesota' value='Minnesota'>Minnesota</option>"+
"<option id='Mississippi' value='Mississippi'>Mississippi</option>"+
"<option id='Missouri' value='Missouri'>Missouri</option>"+
"<option id='Montana' value='Montana'>Montana</option>"+
"<option id='Nebraska' value='Nebraska'>Nebraska</option>"+
"<option id='Nevada' value='Nevada'>Nevada</option>"+
"<option id='New Hampshire' value='New Hampshire'>New Hampshire</option>"+
"<option id='New Jersey' value='New Jersey'>New Jersey</option>"+
"<option id='New Mexico' value='New Mexico'>New Mexico</option>"+
"<option id='New York' value='New York'>New York</option>"+
"<option id='North Carolina' value='North Carolina'>North Carolina</option>"+
"<option id='North Dakota' value='North Dakota'>North Dakota</option>"+
"<option id='Ohio' value='Ohio'>Ohio</option>"+
"<option id='Oklahoma' value='Oklahoma'>Oklahoma</option>"+
"<option id='Oregon' value='Oregon'>Oregon</option>"+
"<option id='Pennsylvania' value='Pennsylvania'>Pennsylvania</option>"+
"<option id='Rhode Island' value='Rhode Island'>Rhode Island</option>"+
"<option id='South Carolina' value='South Carolina'>South Carolina</option>"+
"<option id='South Dakota' value='South Dakota'>South Dakota</option>"+
"<option id='Tennessee' value='Tennessee'>Tennessee</option>"+
"<option id='Texas' value='Texas'>Texas</option>"+
"<option id='Utah' value='Utah'>Utah</option>"+
"<option id='Vermont' value='Vermont'>Vermont</option>"+
"<option id='Virginia' value='Virginia'>Virginia</option>"+
"<option id='Washington' value='Washington'>Washington</option>"+
"<option id='West Virginia' value='West Virginia'>West Virginia</option>"+
"<option id='Wisconsin' value='Wisconsin'>Wisconsin</option>"+
"<option id='Wyoming' value='Wyoming'>Wyoming</option>"+
"</select></br>"+

"Expriation Date: <input type='month'id='date' value='2019-04' min='2017-01' max='2020-12'></br><p id'error'></p>";

   
        console.log("cc");
    }else if(control == "payPal"){
        document.getElementById('container').innerHTML =
        "Email</br><input type='text' id='email' required></br>PayPal Password</br><input type='password' id='password'></br><p id='error'></p>";
    }
}

function validateControl(control, name, length){
    if(!(testLength(control, length, true))){
        document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" + name + " needs to be the correct length!";
        return false;
    }if(!(testNumber(control))){
        document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" + name + " needs to be a number.";
        return false;
    }return true;
}


function validateCreditCard(value){
    value = value.replace(' ','');

    if(value[0] == '3'){//American Express
        if(!testLength(value, 15, true)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }else if(!testNumber(value)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }return true;
    }else if(value[0] == '6'){
        if(!testLength(value, 16, true)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }else if(!testNumber(value)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }return true;
    }else if(value[0] == '5'){
        if(!testLength(value, 16, true)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }else if(!testNumber(value)){ 
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }return true;
    }else if(value[0] == '4'){
        if(!testLength(value, 16, true)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }else if(!testNumber(value)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
            return false;
        }return true;
    }document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Invalid credit card number";
    return false;
}


function validateDate(value){
    var dtValue = new Date(value);
    var dtNow = new Date();
    dtNow.setMonth(dtNow.getMonth() + 1);
    if(dtValue.valueOf() > dtNow.valueOf()){
        return true;
    }
    console.log(dtNow);
    console.log(dtValue);
    document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +  "Input a valid date";
    return false;
}

function validateEmail(value){
    //Learn how to do RegEx
    var re = /\S+@\S+\.\S+/;
    if(re.test(value.toLowerCase())){
        return true;
    }else{
        document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" + "Please enter a valid email";
        return false;
    }
}

function validateForm(){
    document.getElementById('error').innerHTML = "";
    if(document.getElementById("creditCard").checked){
        if (
        validateControl(document.getElementById('zip').value, "Zip Code", 5) &&
        validateEmail(document.getElementById('email').value) &&
        validateCreditCard(document.getElementById('cardNum').value) &&
        validateControl(document.getElementById('cvv').value, "CVV2/CVC", 3) &&
        validateState() &&
        validateDate(document.getElementById('date').value) ){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Payment Submitted";
        }
    }else{
        if( validateEmail(document.getElementById('email').value) &&
            validatePassword(document.getElementById('password').value, 8)){
            document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"Payment Submitted";
        }
    }



    return false;
}

function validatePassword(value, minLength){
    if(testLength(value, minLength, false)){
        return true;
    }
    document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" + document.getElementById('error').innerHTML + "</br>" + "Must enter 8 characters for the password!";
    return false;
}

function validateState(){
    if(document.getElementById('state').value == 'default'){
        document.getElementById('error').innerHTML = document.getElementById('error').innerHTML + "</br>" +"please select a state.";
        return false;
    }return true;
}