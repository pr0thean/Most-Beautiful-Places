var numer = Math.floor(Math.random()*9)+1;
var timer1 = 0;
var timer2 = 0;
		
function ustawslajd(nrslajdu)
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	numer = nrslajdu - 1;
			
	schowaj();
	setTimeout("zmienslajd()", 500);
}
		
function schowaj()
{
		$("#slider").fadeOut(500);
}
		
function zmienslajd()
{
		numer++;
		if (numer>9)
			numer=1;
			
		var plik = "<img src=\"img/slajdy/slajd" + numer + ".jpg\" width=\"1200\" height=\"800\" />";		
		document.getElementById("slider").innerHTML = plik;
			
		// uchwyt.funkcja (taka sładnia w jquery)
		$("#slider").fadeIn(500);
		timer1 = setTimeout("zmienslajd()", 5000);
		timer2 = setTimeout("schowaj()", 4500);
}