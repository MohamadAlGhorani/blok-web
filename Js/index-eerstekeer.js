var genre = document.querySelector('header form:last-of-type input:first-of-type');
var form = document.querySelector('header form:last-of-type');
var filter = document.querySelector('header nav ul li button');
var formFilter = document.querySelector('header form:nth-of-type(2)');
var search = document.querySelector('header nav li:last-of-type button');
var formSearch = document.querySelector('header form:first-of-type');
var like = document.querySelectorAll('article li:first-of-type button');
var profileNumber = document.querySelector('header nav ul li:last-of-type span');
var profileGetal = parseInt(profileNumber.innerText);
var favorit = document.querySelectorAll('section article header button');
var verrasMe = document.querySelector('header form:last-of-type input:nth-of-type(4)');
var download = document.querySelectorAll('section article ul li:last-of-type button');
var downloadArray = Array.from(download);

var slider = document.querySelector("header input[type=range]");
var output = document.querySelector("header form:nth-of-type(2) fieldset:nth-of-type(2) p span");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
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



//genre.addEventListener('click', formSubmit);
//verrasMe.addEventListener('click', formSubmitTwee);
filter.addEventListener('click', filteren);
search.addEventListener('click', zoeken);
filter.addEventListener('click', terug);


for (var i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function () {
        var likeLabel = this.parentNode.nextElementSibling;
        var likeGetaltje = parseInt(likeLabel.innerText);
        this.classList.toggle('ani');
        console.dir(this.parentNode.nextElementSibling);
        if (this.classList.contains('ani')) {
            likeGetaltje = likeGetaltje + 1;
            likeLabel.textContent = likeGetaltje;
            status = 'twee';
        } else {
            likeGetaltje = likeGetaltje - 1;
            likeLabel.textContent = likeGetaltje;
            status = 'een';
        }
    });

} //end for

for (var i = 0; i < favorit.length; i++) {
    favorit[i].addEventListener("click", function () {
        this.classList.toggle('tril');
        var melding = this.nextElementSibling.nextElementSibling;
        console.log(melding);
        console.dir(this);
        melding.classList.add('ani');
            setTimeout(function () {
                melding.classList.remove('ani');
            }, 4500);
    });
} //end for

downloadArray.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.classList);
        var melding = item.parentNode.parentNode.nextElementSibling;
        melding.classList.add('ani');
        setTimeout(function () {
            melding.classList.remove('ani');
        }, 3000);
    });
});
