var genre = document.querySelector('header form:last-of-type input:first-of-type');
var form = document.querySelector('header form:last-of-type');
var filter = document.querySelector('header nav ul li button');
var formFilter = document.querySelector('header form:nth-of-type(2)');
var search = document.querySelector('header nav li:last-of-type button');
var formSearch = document.querySelector('header form:first-of-type');
var like = document.querySelectorAll('article li:first-of-type button');
console.log("like", like);
var favorit = document.querySelectorAll('section article header button');
console.log("favorit", favorit);
var verrasMe = document.querySelector('header form:last-of-type input:nth-of-type(4)');
var likeElement = document.querySelector('body section article ul span li:last-of-type');
var likeGetal = parseInt(likeElement.innerText);
console.log(likeGetal + 1);
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
        status = 'twee';
    } else if (status == 'twee') {
        likeGetal = likeGetal - 1;
        likeElement.textContent = likeGetal;
        status = 'een';
    }
}

function formSubmit() {
    form.action = "genre.html";
    form.submit();
}

function formSubmitTwee() {
    form.action = "verrasme.html";
    form.submit();
}

function filteren() {
    formFilter.classList.toggle('filteren');
}

function zoeken() {
    formSearch.classList.toggle('zoeken');
}

function terug() {
    filter.classList.toggle('che');
}

genre.addEventListener('click', formSubmit);
verrasMe.addEventListener('click', formSubmitTwee);
filter.addEventListener('click', filteren);
search.addEventListener('click', zoeken);

for (var i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function () {
        console.log(this);
        this.classList.toggle('ani');
        likeNummer(this);
    });
} //end for

for (var i = 0; i < favorit.length; i++) {
    favorit[i].addEventListener("click", function () {
        console.log(this);
        this.classList.toggle('ani');

    });
} //end for

filter.addEventListener('click', terug);

//like.addEventListener('click', likeNummer);
