function showInnerImage() {
    var innerImage = document.querySelector('#in');
    innerImage.style.opacity = '1';
    var innerImage = document.querySelector('#out');
    innerImage.style.opacity = '0';
    var one = document.getElementById('1').innerHTML='Payload Fairing';
    var two = document.getElementById('2').innerHTML='Vikram Lander';
    var thre = document.getElementById('3').innerHTML='L110 Liquid Stage';
    var four = document.getElementById('4').innerHTML='Heatshield ';
    var five = document.getElementById('5').innerHTML='C25 Cryogenic Stage';
    var six = document.getElementById('6').innerHTML='S200 Boosters';

}
function reset(){
    var innerImage = document.querySelector('#in');
    innerImage.style.opacity = '0';
    var innerImage = document.querySelector('#out');
    innerImage.style.opacity = '1';
    var one = document.getElementById('1').innerHTML='Height : 43.5m';
    var two = document.getElementById('2').innerHTML='Number of Stages : 3';
    var thre = document.getElementById('3').innerHTML='Vehicle Diameter : 4m';
    var four = document.getElementById('4').innerHTML='Payload Capacity : 4 tonnes ';
    var five = document.getElementById('5').innerHTML='Lift Off Mass : 640 tonnes';
    var six = document.getElementById('6').innerHTML='Largest Cryogenic Engine';
}
