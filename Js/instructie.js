var button = document.querySelector('body section button');
var text = document.querySelector('body section p:first-of-type');
var img = document.querySelector('body section p:nth-of-type(2)');
var form = document.querySelector('body section form');
var status = 'een';


function instructie() {
    if (status === 'een') {
        text.textContent = 'U kunt leuke verhalen downloaden zodat u de verhalen offline kan lezen en goed voorbereid op reis kan gaan.';
        img.classList.add('first');
        status = 'twee';
        //e.preventDefault();
        return status;
    } else if (status === 'twee') {
        text.textContent = 'Wanneer u tevreden bent hebben wij ons doel bereikt';
        img.classList.remove('first');
        img.classList.add('second');
        status = 'drie';
        button.textContent = 'Beginnen';
        //e.preventDefault();
        return status;
    } else {
        form.action = 'index-eerstekeer.html';
        form.submit();
    }

}

button.addEventListener('click', instructie);
