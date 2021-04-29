let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        
        document.getElementById('main-menu').style.top = '0';
        document.getElementById('main-menu').style.transition = '.2s ease-in';
        
        
    }
    else{
          
        document.getElementById('main-menu').style.top = '-120px';
        document.getElementById('main-menu').style.transition = '.2s ease-in';
        

    }
    ubicacionPrincipal = Desplazamiento_Actual;
}