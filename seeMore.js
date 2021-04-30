let btnVerMas =  document.getElementById('btn-vermas');
let contVideos = document.getElementById('cont-videos');
let verMenos = document.getElementById('btnvermenos');

verMenos.style.display='none'

btnVerMas.addEventListener('click',function(){
   contVideos.classList = 'videos active'
   btnvermenos.style.display='block'
   btnVerMas.style.display='none'
})

verMenos.addEventListener('click',function(){
   contVideos.classList = 'videos'
   btnVerMas.style.display='block'
   btnvermenos.style.display='none'
})
