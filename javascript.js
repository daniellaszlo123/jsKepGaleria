window.addEventListener("load", init);

/*rövidítések*/{
function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
}

var kepeim = [{
    eleres: "kepek/kep01.jpg",
    cim: "Állatok",
    leiras: "Kecskék",},
    {
    eleres: "kepek/kep02.jpg",
    cim: "Japán fa",
    leiras: "Szép sétány"
    },
    {
    eleres: "kepek/kep03.jpg",
    cim: "Sárga virágok",
    leiras: "Szép mezőföld"
    },
    {
    eleres: "kepek/kep04.jpg",
    cim: "Tájkép",
    leiras: "Fent a magasban!"
    },
    {
    eleres: "kepek/kep05.jpg",
    cim: "Az út mellet",
    leiras: "Szép fehér virágok az út mellet"
    }]

var kepindex = 0;
function galeria(){
    var txt="";
    for (let i = 0; i < kepeim.length; i++) {
        txt+=
        `<div class="kep">
            <img id="${i}" src="${kepeim[i].eleres}" alt="${kepeim[i].cim}">
        </div>`;
    }
    ID("inp").innerHTML=txt;
    for (let index = 0; index < kepeim.length; index++) {
        ID(index).addEventListener("click", kepKivalasztas)
        CLASS("kep")[index].style.border="5px solid red";
        CLASS("kep")[index].className+=" kepekformazasa";
        $("#inp img")[index].style.borderRadius="50px";
    }

    document.querySelector(".kepek img").style.borderRadius="50px";

}

function kepKivalasztas() {
    console.log(event.target.id);
    kepindex=Number(event.target.id);
    megjelenit();
}

function init() {
    megjelenit();
    galeria();
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
}
function megjelenit() {
    ID("kivalasztott").src = kepeim[kepindex].eleres;
    ID("kivalasztott").alt = kepeim[kepindex].cim;
}
function balra() {
    kepindex --;
    if(kepindex <= 0){
        kepindex = kepeim.length-1;
    }
    console.log(kepindex);
    megjelenit(kepindex);
}
function jobbra() {
    kepindex ++;
    if(kepindex >= kepeim.length-1){
        kepindex = 0;
    }
    console.log(kepindex);
    megjelenit(kepindex)
}
