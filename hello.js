var k = document.getElementById("yes");
var y = document.getElementById("no");
var img = document.getElementById("im");
c=0;

if(c){
setTimeout(function() { alert("my message"); }, 10000);
}

img.style.zIndex = 0;
y.style.zIndex = 9999;

function jump() {
    var a = Math.random() * 200;
    var b = Math.random() * 200 ;

    console.log(a, b);
    y.style.left = `${a}px`;
    y.style.top = `${b}px`;
}
