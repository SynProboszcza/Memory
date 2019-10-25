let bufor = [];
let m = 0;
let czasDoZnikniecia = 0;
/*
1 = 9
2 = 10
3 = 11
4 = 12
5 = 13
6 = 14
7 = 15
8 = 16
*/

/*


TODO: 

1. trzeba zobaczyc czy trafia sie takie same dwa elementy

	!!!!!!!!zamienic je na "zrobione" elementy i zabrac mozliwosc klikania ich
		oznaczyc czy dany element jest juz gotowy i dopiero wtedy zabrac mu klikalnosc
		potem sprawdzac czy ten element jest gotowy

	nie moze to byc ten sam element html
2. ilosc klikniec(dlugosc tablicy bufor(potem moze nawet na minute xD))
3. limit czasowy gry/podliczanie czasu gry
4. leaderboard
	czyli trzeba pytac o nazwe gracza
		ew. zapisy do bazy danych


*/

	//przyjmuje liczbe
	//jezeli liczba > 9 zwraca liczbe z tablicy wyzej
function over9(int){
	switch(int){
		case 9: 
		return 1;
		break;
		case 10: 
		return 2;
		break;
		case 11: 
		return 3;
		break;
		case 12: 
		return 4;
		break;
		case 13: 
		return 5;
		break;
		case 14: 
		return 6;
		break;
		case 15: 
		return 7;
		break;
		case 16: 
		return 8;
		break;
	}
	return int;}

//Raz przydzielamy do kazdego obrazka eventListener, ktory wywoluje 
//funkcjie odwracamKarte(i);, gdzie i to jego id

for(let i=1; i<17; i++){
	poID(i).addEventListener('click',function() {odwracamKarte(i);},false);



}
function odwracamKarte(id){
	//poID("body").style.backgroundColor = 'grey';
	//alert(id);
	bufor[bufor.length] = id;
	console.log(bufor);
	//if(dwie takie same liczby && rozne id)
	if((over9(bufor[bufor.length-1])==over9(bufor[bufor.length-2])) && (bufor[bufor.length-1]!=bufor[bufor.length-2])){
		//ten kod wykonuje sie kiedy trafisz dwa takie same elementy
		//zmienObrazNa(src,id)
		zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		//zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-2])+".png",bufor[bufor.length-2]);
		//zmienObrazNa("karty/"+over9(bufor[bufor.length-2])+".png",bufor[bufor.length-2]);



/*		poID(bufor[bufor.length-1]).removeEventListener('click',function() {odwracamKarte(i);},false);
		poID(bufor[bufor.length-2]).removeEventListener('click',function() {odwracamKarte(i);},false);
		
		Zamiast tego ludzie pisza zeby sklonowac obiekt(node) i dac go w to samo miejsce,
		bo jego kopiowanie nie przekopiuje jego eventlistenerow
		https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element

*/

		//alert("eluwina\n"+"Kliknałęś "+bufor.length+" razy.");
		//alert("Kliknałęś "+bufor.length+" razy.");
	} else {















		//debugger;
		clearTimeout(czasDoZnikniecia);
		zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		//zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		//czasDoZnikniecia = setTimeout(function(){ zmienObrazNa("karty/rewers.png",bufor[bufor.length-1])},250)
		czasDoZnikniecia = setTimeout(function(){ zmienObrazNa("karty/gotowe/tlo.png",bufor[bufor.length-1])},250)



	}


}





/*
function odwrocKarte(id){
	//debugger;

	//tworzy nowy element w tablicy o wartosci id
	bufor[bufor.length] = id;
	console.log(bufor);
	//if(dwie takie same liczby && rozne id)
	if((over9(bufor[bufor.length-1])==over9(bufor[bufor.length-2])) && (bufor[bufor.length-1]!=bufor[bufor.length-2])){
		//ten kod wykonuje sie kiedy trafisz dwa takie same elementy
		//zmienObrazNa(src,id)
		zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		zmienObrazNa("karty/"+over9(bufor[bufor.length-2])+".png",bufor[bufor.length-2]);
		//alert("eluwina\n"+"Kliknałęś "+bufor.length+" razy.");
		//alert("Kliknałęś "+bufor.length+" razy.");
	} else {
		zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		setTimeout(function(){ zmienObrazNa("karty/rewers.png",bufor[bufor.length-1])},1000)



	}
}
*/
/*
interwal

*/
























