const sections = document.getElementsByClassName("section-item")
// console.log(sections);
const links = document.getElementsByTagName("a")
// console.log(links);
for (const iterator of links) {
    const reference = iterator.attributes.href.value
    const referenceWithoutId = Array.from(reference)
    referenceWithoutId.shift()
    const realReference = referenceWithoutId.join('')
    // console.log(realReference);
    iterator.addEventListener('click', () => {hideAndShowSection(realReference)})
}

function hideAndShowSection(reference) {
    console.log(reference);
    for (const iterator of sections) {
        const identification = iterator.id
        if (identification != reference) {
            iterator.classList.add("inactive")
        } else {
            iterator.classList.remove("inactive")
        }
    }
}