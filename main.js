var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
//Ромашка:R=180; r=140;d=50
var R = 180;
var r = 140;
var d = 50;
var teta = 0;
var timer;

/*Ставим точки на canvasе*/
function spiro(){
	var x = (R-r)*Math.cos(teta) + d * Math.cos((R-r)*teta/r);
	var y = (R-r)*Math.sin(teta) - d * Math.sin((R-r)*teta/r);
	teta = teta + 0.1;

	/*Делаем рисование*/
	ctx.fillRect(300+x,300+y,4,4);

	/*Делаем анимацию*/
	timer = setTimeout(spiro,1);

}
spiro();

function loadXMLDoc(method, url, func) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (+xmlhttp.status.toString().charAt(0) === 2) {
           		func(xmlhttp.responseText);               
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open(method, url, true);
    xmlhttp.send();
}

//debugger;
loadXMLDoc("POST", "https://reqres.in/api/users?page=2", function(responseText){
	//debugger;
//	document.getElementsByTagName("body")[0].innerHTML = responseText;
})


