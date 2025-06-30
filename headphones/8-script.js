const humbur = document.getElementById('humber');
const navDisplay = document.getElementById('nav');

humbur.addEventListener('click', drop)
function drop() {
    navDisplay.classList.toggle('hidden');
}
 