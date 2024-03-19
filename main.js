let menu= documentSelector('menu-icon');
let navbar= querrySelector('.navbar');


menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollRevel({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})
sr.reveal('.text', {delay:200, origin: 'top'})

sr.reveal('.heading', {delay:800, origin: 'top'})
sr.reveal('.reserch-container-box', {delay:800, origin: 'top'})
sr.reveal('.planning-container-box', {delay:800, origin: 'top'})
sr.reveal('.designing-container-box', {delay:800, origin: 'top'})
sr.reveal('.manufacturing-container-box', {delay:800, origin: 'top'})
sr.reveal('.sales/marketing-container-box', {delay:800, origin: 'top'})