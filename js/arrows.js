const arrows = document.getElementsByClassName('arrow');
const parrafs = document.getElementsByClassName('blockText');
// for (const parraf of parrafs) {
//     console.log(parraf);
// }
for (const arrow of arrows) {
    arrow.addEventListener('click', () => arrowsReference(arrow))
}
function arrowsReference(arrowActive) {
    for (const parraf of parrafs) {
        if(arrowActive.classList[1] === parraf.classList[1]){
            showText(arrowActive, parraf)
        }
    }
}
function showText(arrow, parraf) {
    if (parraf.classList.contains('inactive')) {
        parraf.classList.remove('inactive')
        arrow.classList.remove('is-down');
        arrow.classList.add('is-up');
    } else {
        parraf.classList.add('inactive')
        arrow.classList.add('is-down');
        arrow.classList.remove('is-up');
    }
}