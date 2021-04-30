let imagen = document.querySelectorAll('.cont-img');

for (let i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener('click',function(){
       this.classList= 'cont-img active'
    })
    
}