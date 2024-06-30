var k = document.getElementById("yes");
var y = document.getElementById("no");

var c=0;
if(!c){
setTimeout(function() {if(!c) {alert("Why So Much Time");} }, 30000);
}
document.getElementById("yes").addEventListener("click", function(event) {
    event.preventDefault();
    c=1;
    alert("Good Decision!!");
    document.querySelector(".tenor-gif-embed").style.display="none";
    document.getElementById("im").src="couldbeus.png";
    document.getElementById("aud").src="reelaudio.mp3";
    document.getElementById("aud1").style.display="block";
    document.getElementById("yes").style.display="none";
    document.getElementById("no").style.display="none";
});
y.style.zIndex = 9999;

function jump() {
    var a = Math.random() * 500;
    var b = (Math.random() * 500) + 500 ;

    console.log(a, b);
    y.style.left = `${a}px`;
    y.style.top = `${b}px`;
}
