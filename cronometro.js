var hour = 0;
var  minute = 0;
var second = 0;
var tempo = 1000;
var cron;

// função para inicial a contagem que ela chama a função timer que faz a 
// alteração dos números
function start(){
    cron = setInterval(() => {timer(); }, tempo);
}
// essa função é que faz a alteração dos números no cronometro
function timer(){
    // logo que chamada ela vai adicionando +1 ao segundos
    second++;
    // e fica fazendo ferificações para ir adicionando +1 nas horas ou minutosk
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
            // aqui é para caso o cronometro vá além ele entrar em pause
            if(hour == 10 && minute == 60){
                pause();
                stop();
            }
        }
    }

    // aqui é para formatar os dados que esçtao sendo alterados e usado no cronometro
    var format = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    document.getElementById('counter').innerText = format;
}
// essa função faz com que pause a adição de números
function pause(){
    clearInterval(cron);

}

// essa função de parar ela pausa a contagem e zera ela do cronometro usando innerText 
function stop(){
    clearInterval(cron);
    hour,minute,second = 0;
    document.getElementById('counter').innerText = '0:00:00';
}