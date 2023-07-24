'use strict';

const sections = document.getElementsByClassName("section-item");
const links = document.getElementsByClassName("section-link");
const geometrySections = document.getElementsByClassName("geometry-item");
const geometryLinks = document.getElementsByClassName("geometry-link")
const triangleSections = document.getElementsByClassName("triangle-item");
const triangleLinks = document.getElementsByClassName("triangle-link");
const discountSections = document.getElementsByClassName("discount-container");
const discountLinks = document.getElementsByClassName("discount-link");
const menuSvgs = document.getElementsByClassName("menu");
const menu = document.getElementById("Menu");
const header = document.getElementById("header");

function matchLinks(links, sections) {
    for (const iterator of links) {
        const reference = iterator.attributes.href.value;
        const referenceWithoutId = Array.from(reference);
        referenceWithoutId.shift();
        const realReference = referenceWithoutId.join('');
        iterator.addEventListener('click', () => {hideAndShowSection(realReference, sections)});
    }
}
matchLinks(links, sections);
matchLinks(geometryLinks, geometrySections);
matchLinks(triangleLinks, triangleSections);
matchLinks(discountLinks, discountSections);

function hideAndShowSection(references, sections) {
    for (const iterator of sections) {
        const identification = iterator.id;
        if (identification != references) {
            iterator.classList.add("inactive");
        } else {
            iterator.classList.remove("inactive");
        }
    }
    switch (references) {
        case 'Home':
            header.style.backgroundColor = '#0085ff'
            menu.style.backgroundColor = '#69b4ff'
            break;
        case 'Geometry':
            header.style.backgroundColor = '#006633'
            menu.style.backgroundColor = '#40955d'
            break;
        case 'Discounts':
            header.style.backgroundColor = '#61398F'
            menu.style.backgroundColor = '#8B5FBF'
            break;
        case 'Basic-statistics':
            header.style.backgroundColor = '#FF6600'
            menu.style.backgroundColor = '#ff983f'
            break;
        case 'Salaries':
            header.style.backgroundColor = '#d90429'
            menu.style.backgroundColor = '#ff98aa'
            break;
        default:
            break;
    }
}
console.log(menu, menuSvgs);

for (const svg of menuSvgs) {
    svg.addEventListener('click', showMenu)
}
function showMenu() {
    for (const svg of menuSvgs) {
        svg.classList.toggle('inactive')
    }
    menu.classList.toggle('inactive')
}
// Colors
const blue_100 = '#0085ff';
const blue_200 = '#69b4ff';

const orange_100 = '#FF6600';
const orange_200 = '#ff983f';

const purple_100 = '#8B5FBF';
const purple_200 = '#61398F';

const red_100 = '#d90429';
const red_200 = '#ff98aa';

const green_100 = '#006633';
const green_200 = '#40955d';
