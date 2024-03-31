import {animes} from './animeObject.js';

let idContador = 0;
const container = document.querySelector('#Container-animes'),
        card = document.querySelector('#Card').content,
        fragmento = document.createDocumentFragment(),
        fragmentoGenero = document.createDocumentFragment();

const listaDeClases = {
    id : '.Target__id',
    img : '.Target__img',
    contInfo : '.Target__info',
    title : '.Target__tittle',
    genero : '.Target__Genero',
    descripcion : '.Target__description'
}

let colores = ["rgb(255, 145, 0)", "rgb(0, 210, 3)", "rgb(108, 0, 108)", "red", "rgb(37, 76, 0)", "rgb(225, 225, 0)", "rgb(255, 39, 75)", "blue", "rgb(0, 210, 140)"];

function seleccionarEnClon(clon, selector) {
    return clon.querySelector(selector);
}

function establecerAtributo(elemento, atributo, valor) {
    elemento.setAttribute(atributo, valor);
}

function crearGenero(nombre, color) {
    let spanGenero = document.createElement('span');
    spanGenero.classList.add("Genero");
    spanGenero.style.backgroundColor = color;
    spanGenero.textContent = nombre;
    return spanGenero;
}

function insertarGeneros(array, fragmento) {
    for (let i = 0; i < array.length; i++) {
        fragmento.appendChild(crearGenero(array[i], colores[i]));
    }
}

function CrearTarjeta(anime) {
    idContador++;

    const clone = document.importNode(card, true);

    const CardId = seleccionarEnClon(clone, listaDeClases.id);
    CardId.querySelector('p').textContent = idContador;

    const CardImg = seleccionarEnClon(clone, listaDeClases.img);
    establecerAtributo(CardImg.querySelector('img'), 'src', anime.Image);
    establecerAtributo(CardImg.querySelector('img'), 'alt', anime.tittle);

    const cardInfo = seleccionarEnClon(clone, listaDeClases.contInfo);
    cardInfo.querySelector(`${listaDeClases.title} h2`).textContent = anime.tittle;

    insertarGeneros(anime.type, fragmentoGenero);

    cardInfo.querySelector(listaDeClases.genero).appendChild(fragmentoGenero);
    cardInfo.querySelector(`${listaDeClases.descripcion} textarea`).textContent = anime.description;

    const section = document.createElement('section');
    section.classList.add('Target');
    section.appendChild(clone);

    return section;
}

animes.forEach(anime => {
    const targeta = CrearTarjeta(anime);
    fragmento.appendChild(targeta);
});

container.appendChild(fragmento);


