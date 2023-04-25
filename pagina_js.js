//codigo que muestra hora y fecha
const $tiempo=document.querySelector('.tiempo'),
$fecha=document.querySelector('.fecha');

function relojdigital(){
    let f=new Date(),
    dia=f.getDate(),
    mes=f.getMonth()+1,
    anio=f.getFullYear(),
    diaSemana=f.getDay();

    dia=('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    let timeString=f.toTimeString();
    $tiempo.innerHTML=timeString;

    let semana=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    let showSemana=(semana[diaSemana])
    $fecha.innerHTML=`${showSemana}-${dia}-${mes}-${anio}`
}

setInterval(()=>{
  relojdigital()

},1000);



