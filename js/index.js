'use strict';

const sections = document.getElementsByClassName("section-item");
const links = document.getElementsByClassName("section-link");
const menuLinks = document.getElementsByClassName("menu-link");
const geometrySections = document.getElementsByClassName("geometry-item");
const geometryLinks = document.getElementsByClassName("geometry-link")
const triangleSections = document.getElementsByClassName("triangle-item");
const triangleLinks = document.getElementsByClassName("triangle-link");
const discountSections = document.getElementsByClassName("discount-container");
const discountLinks = document.getElementsByClassName("discount-link");
const menuSvgs = document.getElementsByClassName("menu");
const menuMobile = document.getElementById("MenuMobile");
const menuDesktop = document.getElementById("MenuDesktop");
const header = document.getElementById("header");

let menuAnimation

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
            header.style.borderColor = '#0085ff'
            menuMobile.style.color = '#69b4ff'
            menuDesktop.style.color = '#69b4ff'
            break;
        case 'Geometry':
            header.style.borderColor = '#006633'
            menuMobile.style.color = '#40955d'
            menuDesktop.style.color = '#40955d'
            break;
        case 'Discounts':
            header.style.borderColor = '#61398F'
            menuMobile.style.color = '#8B5FBF'
            menuDesktop.style.color = '#8B5FBF'
            break;
        case 'Basic-statistics':
            header.style.borderColor = '#FF6600'
            menuMobile.style.color = '#ff983f'
            menuDesktop.style.color = '#ff983f'
            break;
        case 'Salaries':
            header.style.borderColor = '#d90429'
            menuMobile.style.color = '#ff3e5e'
            menuDesktop.style.color = '#ff3e5e'
            break;
        default:
            break;
    }
}

for (const svg of menuSvgs) {
    svg.addEventListener('click', showMenu)
}
for (const link of menuLinks) {
    link.addEventListener('click', showMenu)
}
function showMenu() {
    for (const svg of menuSvgs) {
        svg.classList.toggle('inactive')
    }
    animateMenu()
}
function animateMenu() {
    menuMobile.getAnimations().map((animation) => menuAnimation = animation.animationName)
    console.log(menuAnimation);
    if (menuAnimation === undefined || menuAnimation === 'hideMenu') {
        menuMobile.style.animation = 'showMenu .3s linear both'
    } else {
        menuMobile.style.animation = 'hideMenu .3s linear both'
    }
}