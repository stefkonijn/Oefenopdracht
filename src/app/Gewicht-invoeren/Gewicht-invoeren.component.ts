import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Gewicht-invoeren',
  templateUrl: './Gewicht-invoeren.component.html',
  styleUrls: ['./Gewicht-invoeren.component.css']
})
export class GewichtInvoerenComponent implements OnInit{


  
    constructor(){}
   // bij het laden van de pagina het streefgewicht laten zien
    ngOnInit(){
      document.getElementById("toekomst").innerText = "Je streefgewicht is: " + this.getCookie("doel");

    }

 
// Bij het submitten van het gewicht met eventuele toelichting wordt het in de cookies gezet. De datum wordt 
// automatisch ingevuld (Dus voor testen handmatig hier de datum aanpassen)
 onClickMe() {
  var gewicht = ((document.getElementById("gewicht") as HTMLInputElement).value);
  var toelichting = ((document.getElementById("tekst") as HTMLInputElement).value);


  var today = new Date();
  var datum = (today.getDate())+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


  type MyArrayType = Array<{ gewicht:string, toelichting: string, datum: string}>;

const arr: MyArrayType = [
    {gewicht: gewicht, toelichting:toelichting, datum: datum},

];
  var result = arr.map(a => a.gewicht);
  document.getElementById("huidig").innerText = "Je huidige gewicht is: "+ gewicht;
  this.setCookie('gewicht_'+datum, JSON.stringify(arr));

}

//Het streefgewicht aangeven en in de cookies zetten
setDoel(){
  var doel = ((document.getElementById("doel") as HTMLInputElement).value);
  type MyArrayType = Array<{doel:string}>;

  const arr: MyArrayType = [
      {doel: doel},
  
  ];
  
      var result = arr.map(a => a.doel);
    this.setCookie("doel", doel)

  document.getElementById("toekomst").innerText = "Je streefgewicht is: "+ this.getCookie("doel");


}




//De functies om de voorspellingen te doen

public getAantalDagen(){
  var theCookies = document.cookie.split(';');
  var aString = '';
  for (var i = 1 ; i <= theCookies.length; i++) {
      aString += i + ' ' + theCookies[i-1] + "\n"
      var test = i;
  }
  return test - 1;
}




maakVoorspelling(){

  var i:number = 0
  var laatstegewicht:number = 0
  var startgewicht:number = 0
  var doel = this.getCookie("doel")

  var dagen = this.getAantalDagen(); 



  document.cookie.split(';').filter(function(c) {
    return c.trim().indexOf('gewicht') === 0;

    
}).map(function(c) {
  var str = c
  var splitted = str.split('"', 8);

  if (i == 0){
    console.log(splitted[3])
     startgewicht = +splitted[3]


  }
  if (i == dagen -1){
    var laatstegewicht:number = +splitted[3]



    var totaal = startgewicht - laatstegewicht 
    var gemiddeld = totaal / dagen
    var hoeveelkwijt = laatstegewicht - +doel;
    var voorspel = hoeveelkwijt / gemiddeld;

    document.getElementById("voorspelling").innerText = "Als je op dit tempo doorgaat ben je over: "+ voorspel + " dagen bij je streefegewicht!";


  }
i += 1;

});

}


// De functies om cookies te gebruiken
  setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;

  // Set it expire in 7 days
  date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

  // Set it
  document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

 getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  
  if (parts.length == 2) {
      return parts.pop().split(";").shift();
  }
}

deleteCookie(name: string) {
  const date = new Date();

  // Set it expire in -1 days
  date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

  // Set it
  document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}
}
