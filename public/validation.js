const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const dob = document.getElementById('dob');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const gender = document.getElementById('gender');
const qual = document.getElementById('qual');
const exp = document.getElementById('exp');
const doj = document.getElementById('doj');
const button = document.getElementById('btn');


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const isPhoneNo = phoneno => {
    const ph = /^\d{10}$/;
    return ph.test(phoneno);
}
    


button.addEventListener('transitionrun', e => {
    e.preventDefault();

    validateInputs();


});


const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phonenoValue = phoneno.value.trim();
    const qualValue = qual.value.trim();
    const expValue = exp.value.trim();



    if (fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }

    if (lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
    else {
        setSuccess(email);
    }

    if (phonenoValue === '') {
        setError(phoneno, 'Phone Number is required');
    }
    else if (!isPhoneNo(phonenoValue)) {
        setError(phoneno, 'Provide a valid phone number');
    }
    else {
        setSuccess(phoneno);
    }

    if (dobvalue === null) {
        setError(dob, 'Date of Birth is required');
    } else {
        setSuccess(dob);
    }

    if (qualValue === '') {
        setError(qual, 'Qualification is required');
    } else {
        setSuccess(qual);
    }

    if (expValue === '') {
        setError(exp, 'Experience is required');
    } else {
        setSuccess(exp);
    }
    
    

    if (dojvalue === null) {
        setError(doj, 'Date of Joining is required');
    } else {
        setSuccess(doj);
    }


}

