const eingabe = document.getElementById('eingabe')
const mengen = document.querySelectorAll('.menge')
const button = document.getElementById('berechnen')

button.addEventListener('click',function(){
    const portion = eingabe.value;

    mengen.forEach(function(element){
       const basis =  element.getAttribute('data-basis');
       const wert = portion * basis;
       element.innerText = wert;

    });

})

