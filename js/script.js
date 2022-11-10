const iniciar = document.getElementById('btnIniciar');
const parar = document.getElementById('btnPara');
const reiniciar = document.getElementById('btnReiniciar');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milisegundos = document.getElementById('milisegundos');
const cronometro = document.querySelector('.container');
const ponteiro = document.getElementById('cronometro');
var hora = 0;
var minuto = 0;
var segundo = 0;
var milisegundo = 0;
var timer;
var play = false;






const main = (botao)=>{
  if(milisegundo != 0 && botao.textContent != 'Retomar'){
    const alerta = document.createElement('p');
    alerta.innerHTML = 'Cronometro já iniciado!';
    alerta.style.color = 'white';
    document.body.appendChild(alerta);
    setTimeout(() => {
      document.body.removeChild(alerta);
    }, 1500);
  }else if(botao.textContent == 'Iniciar'){
    ponteiro.style.animation = 'spin 60s infinite linear';
    timer = setInterval(() => {
      iniciarCronometro();
    }, 10);
  }else if(botao.textContent == 'Retomar'){
    ponteiro.style.animation = 'spin 60s infinite linear';
    botao.innerText = 'Iniciar'
    timer = setInterval(() => {
      iniciarCronometro();
    }, 10);
  }
};


const iniciarCronometro = ()=>{

  milisegundo += 1;

  if(milisegundo == 100){
    milisegundo = 0;
    segundo += 1;

    if(segundo >= 60){  
      segundo = 0;
      minuto += 1;
    }
    if(minuto >= 60){
      minuto = 0;
      hora += 1;
    }
  }

  milisegundos.innerHTML = milisegundo;
  segundos.innerHTML = segundo;
  minutos.innerHTML = minuto;
  horas.innerHTML = hora;
}

const pararCronometro = ()=>{
  clearInterval(timer);
  iniciar.innerText = 'Retomar';
 ponteiro.style.animationPlayState = 'paused';
}

const reiniciarCronometro = ()=>{
  clearInterval(timer);
  milisegundo = 0;
  segundo = 0;
  minuto = 0;
  hora = 0;
  deg = 270;
  milisegundos.innerHTML = milisegundo;
  segundos.innerHTML = segundo;
  minutos.innerHTML = minuto;
  horas.innerHTML = hora;
  ponteiro.style.animation = '';
  ponteiro.style.rotate = '270deg';
}

cronometro.addEventListener('click',(e)=>{
  e.preventDefault;
  let botao = e.target;
  
  if(botao.textContent == 'Iniciar'){
    main(botao);
  }else if(botao.textContent == 'Retomar'){
    main(botao);
    // addAnimation(`
    //   @keyframes spin {
    //     from {transform:rotate(${deg}deg);}
    //     to {transform:rotate(270deg);}
    //   }
    // `);
  }else if(botao.id == 'btnParar'){
    pararCronometro();
  //   addAnimation(`
  //   @keyframes spin {
  //     from {transform:rotate(${deg}deg);}
  //     to {transform:rotate(${deg}deg);}
  //   }
  // `);
  }else if(botao.id == 'btnReiniciar'){
    reiniciarCronometro();
  }
  
});