function showInnerImage() {
    var innerImage = document.querySelector('#in');
    innerImage.style.opacity = '1';
    var innerImage = document.querySelector('#out');
    innerImage.style.opacity = '0';
}
function reset(){
    var innerImage = document.querySelector('#in');
    innerImage.style.opacity = '0';
    var innerImage = document.querySelector('#out');
    innerImage.style.opacity = '1';
}
