
const barra = document.getElementsByTagName('nav');

window.addEventListener('scroll',function mifunc(barra){
    if(this.window.scrollY > 0){
        return true;
    }
    if(mifunc){
        barra.classList.toggle('active');
    }
});


console.log(barra);



