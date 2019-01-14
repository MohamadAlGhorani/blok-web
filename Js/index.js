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



genre.addEventListener('click', formSubmit);
verrasMe.addEventListener('click', formSubmitTwee);
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
        this.classList.toggle('ani');
        var melding = this.nextElementSibling.lastElementChild;

        if (this.classList.contains('ani')) {
            profileGetal = profileGetal + 1;
            profileNumber.textContent = profileGetal;
            console.dir(this);
            melding.classList.add('ani');
            setTimeout(function () {
                melding.classList.remove('ani');
            }, 4500);
        } else {
            profileGetal = profileGetal - 1;
            profileNumber.textContent = profileGetal;
        }



        if (profileGetal > 0) {
            profileNumber.classList.add('verschijn');
        } else if (profileGetal <= 0) {
            profileNumber.classList.remove('verschijn');
        }


    });
} //end for

downloadArray.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.classList);
        if (item.classList.value == "") {
            item.classList.add('gif');
            item.innerHTML = 'Downloaden';
            setTimeout(function () {
                item.classList.remove('gif');
                item.classList.toggle('ani');
                var melding = item.parentNode.parentNode.nextElementSibling;

                if (item.classList.contains('ani')) {
                    profileGetal = profileGetal + 1;
                    profileNumber.textContent = profileGetal;
                    item.innerHTML = 'Gedownload';
                    melding.classList.add('ani');
                    setTimeout(function () {
                        melding.classList.remove('ani');
                    }, 3000);

                } else {
                    profileGetal = profileGetal - 1;
                    profileNumber.textContent = profileGetal;
                    item.innerHTML = 'Download';
                }

                if (profileGetal > 0) {
                    profileNumber.classList.add('verschijn')
                } else if (profileGetal <= 0) {
                    profileNumber.classList.remove('verschijn');
                }
            }, 2100);
        } else if (item.classList.value == 'ani') {
            item.classList.remove('ani');
            item.classList.remove('gif');
            item.innerHTML = 'Download';
            profileGetal = profileGetal - 1;
            profileNumber.textContent = profileGetal;
            if (profileGetal > 0) {
                profileNumber.classList.add('verschijn')
            } else if (profileGetal <= 0) {
                profileNumber.classList.remove('verschijn');
            }
        }
    });
});





