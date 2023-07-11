const sections = document.getElementsByClassName("section-item")
const links = document.getElementsByClassName("section-link")
const geometrySections = document.getElementsByClassName("geometry-item");
const geometryLinks = document.getElementsByClassName("geometry-link")
const triangleSections = document.getElementsByClassName("triangle-item");
const triangleLinks = document.getElementsByClassName("triangle-link");
const discountSections = document.getElementsByClassName("discount-container");
const discountLinks = document.getElementsByClassName("discount-link");

function matchLinks(links, sections) {
    for (const iterator of links) {
        const reference = iterator.attributes.href.value
        const referenceWithoutId = Array.from(reference)
        referenceWithoutId.shift()
        const realReference = referenceWithoutId.join('')
        // console.log(realReference);
        iterator.addEventListener('click', () => {hideAndShowSection(realReference, sections)})
    }
}
matchLinks(links, sections)
matchLinks(geometryLinks, geometrySections)
matchLinks(triangleLinks, triangleSections)
matchLinks(discountLinks, discountSections)

function hideAndShowSection(references, sections) {
    console.log(references);
    for (const iterator of sections) {
        const identification = iterator.id
        if (identification != references) {
            iterator.classList.add("inactive")
        } else {
            iterator.classList.remove("inactive")
        }
    }
}