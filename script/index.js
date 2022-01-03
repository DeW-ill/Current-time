// Relógio Digital
function showTimer() {

    //Aqui é onde buscamos as horas, minutos e segundos
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    // Aqui acrescentamos um zero a esquerda sempre que algum dos algarismos for menor que 10
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Variáveis que buscam os spans(nesse caso) que receberão os números separadamente
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('seconds');

    //Injeção de HTML com template Literals
    hour.innerHTML = `${hours}`;
    minute.innerHTML = `${minutes}`;
    second.innerHTML = `${seconds}`;

}

// Inicai o timer assim que a página é carregada
function initTimer() {
    // O metodo setInterval atualiza o0s segundos  
    setInterval(showTimer, 1000);
}