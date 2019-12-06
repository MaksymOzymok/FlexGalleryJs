const panels = document.querySelectorAll('.panel');

function open(){
    this.classList.toggle('open');
    console.log('as')
}
function openActive(e){
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
    console.log(e.propertyName);
}

panels.forEach(cur=>cur.addEventListener('click',open));
panels.forEach(cur=>cur.addEventListener('transitionend',openActive));