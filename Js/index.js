var genre = document.querySelector('header form:last-of-type input:first-of-type');
var form = document.querySelector('header form:last-of-type');
var filter = document.querySelector('header nav ul li button');
var formFilter = document.querySelector('header form:nth-of-type(2)');
var search = document.querySelector('header nav li:last-of-type button');
var formSearch = document.querySelector('header form:first-of-type');
var like = document.querySelector('article li:first-of-type button');
var favorit = document.querySelector('section article header button');
var verrasMe = document.querySelector('header form:last-of-type input:nth-of-type(4)');
var likeElement = document.querySelector('body section article ul span li:last-of-type');
var likeGetal = 50;
var status = 'een';

var slider = document.querySelector("header input[type=range]");
var output = document.querySelector("header form:nth-of-type(2) fieldset:nth-of-type(2) p span");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}

function likeNummer() {

    if (status == 'een') {
        likeGetal = likeGetal + 1;
        likeElement.textContent = likeGetal;
        status = 'twee'
    } else if (status == 'twee') {
        likeGetal = likeGetal - 1;
        likeElement.textContent = likeGetal;
        status = 'een';
    }
}

function formSubmit() {
    form.action = "/genre.html";
    form.submit();
}

function formSubmitTwee() {
    form.action = "/verrasme.html";
    form.submit();
}

function filteren() {
    formFilter.classList.toggle('filteren');
}

function zoeken() {
    formSearch.classList.toggle('zoeken');
}

function likeFunctie() {
    like.classList.toggle('ani');
}

function favorietFunctie() {
    favorit.classList.toggle('ani');
}

function terug() {
    filter.classList.toggle('che');
}

genre.addEventListener('click', formSubmit);
verrasMe.addEventListener('click', formSubmitTwee);
filter.addEventListener('click', filteren);
search.addEventListener('click', zoeken);
like.addEventListener('click', likeFunctie);
favorit.addEventListener('click', favorietFunctie);
filter.addEventListener('click', terug);
like.addEventListener('click', likeNummer);

