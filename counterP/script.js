let count=0;
document.getElementById('btn-d').onclick= function(){
    count -= 1;
    document.getElementById('num').innerHTML = count;
}
document.getElementById('btn-r').onclick= function(){
    count = 0;
    document.getElementById('num').innerHTML = count;
}
document.getElementById('btn-i').onclick= function(){
    count += 1;
    document.getElementById('num').innerHTML = count;
}
