//info viaggio
postoPartenza = "Italia"
arrayCittaPartenza = ["Tornio","Milano","Roma","Napoli"]
destinazione = sessionStorage.getItem('destinazioneRq')
tipoViaggio = sessionStorage.getItem('tipoViaggio')
dataPartenza = sessionStorage.getItem('dataPartenza')
divAndata = document.querySelector('.soloAndataDiv')
divAndataRitorno = document.querySelector('.andataRitornoDiv')
ordinoPrezzo = []
var scalDispo = ""

nomeCitta = {
    "Austria" : ["Vienna","Graz","Salisburgo"],
    "Brazile" : ["San Paolo","Rio De Jeneiro","Salvador"],
    "Canada" : ["Toronto","Calgary","Montrèal"],
    "Cina" :  ["Pechino","Wuhan","Shanghai"],
    "Colombia" : ["Bogotá","Cartagena","Barranquilla"],
    "Egitto" : ["Il Cairo","Sharm El-Sheukh","Alessandria"],
    "Francia" : ["Parigi","Nizza","Marsiglia"],
    "Germania" : ["Berlino","Francoforte","Stoccarda"],
    "Grecia" : ["Atene","Mykonos","Santorini"],
    "Inghilterra" : ["Londra","Manchester","Birimingham"],
    "India" : ["New Delhi","Mumbai","Goa"],
    "Giordania" : ["Amman","Jerash","Aquaba"],
    "Marocco" : ["Rabat","Casablanca","Oujda"],
    "Polonia" : ["Varsavia","Cracovia","Danzica"],
    "Russia" : ["Mosca","San Pietroburgo","Ufa"],
    "Spagna" : ["Barcellona","Madrid","Ivissa"],
    "Stati Uniti" : ["New York","Los Angeles","Miami"],
    "Sud Africa" : ["Pretoria","Citta del Capo","Durban"],
};


function cercoCitta(){
    randomCittaPar = arrayCittaPartenza[randomNum(4,0)]
    ranomCittaArr = nomeCitta[destinazione][randomNum(3,0)]
    return [randomCittaPar,ranomCittaArr]
}

cercoCitta()

function randomNum(num1,num2){
    return Math.floor(Math.random() * num1) + num2;
}

function controlloTempo(tempoA,num1,num2){
    var tempoControllatoRandom = randomNum(num1,num2)
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10) {
        mm='0'+mm;
    } 
    oggi = yyyy+'-'+mm+'-'+dd;

    if(oggi==dataPartenza){
        while(tempoControllatoRandom<tempoA){
            tempoControllatoRandom = randomNum(num1,num2)
        }
    }

    if(tempoControllatoRandom<10){
        tempoControllatoRandom = "0" + tempoControllatoRandom
    }

    return tempoControllatoRandom
}

function controlloTempoArrivo(oraPar,badge){
    oraPartenza = parseInt(oraPar)
    if(badge=="Diretto"){
        var tempoControllatoRandom = randomNum(3,2) + oraPartenza
        scalDispo = "Diretto"
    }else if(badge=="1 Scalo"){
            tempoControllatoRandom = randomNum(6,4) + oraPartenza
            scalDispo = "1 Scalo"
        }else if(badge=="2 Scali"){
                tempoControllatoRandom = randomNum(9,5) + oraPartenza
                scalDispo = "2 Scali"
            }else if(badge=="3 Scali"){
                    tempoControllatoRandom = randomNum(12,7) + oraPartenza
                    scalDispo = "3 Scali"
                }   

    if(tempoControllatoRandom<10){
        tempoControllatoRandom = "0" + tempoControllatoRandom
    }

    if(tempoControllatoRandom>=24){
        if(tempoControllatoRandom==24){
            tempoControllatoRandom="00"
        }else if(tempoControllatoRandom==25){
                tempoControllatoRandom="01"
            }else if(tempoControllatoRandom==26){
                    tempoControllatoRandom="02"
                }else if(tempoControllatoRandom==27){
                        tempoControllatoRandom="03"
                    }else if(tempoControllatoRandom==28){
                            tempoControllatoRandom="04"
                        }else if(tempoControllatoRandom==29){
                            tempoControllatoRandom="05"
                        }else if(tempoControllatoRandom==30){
                                tempoControllatoRandom="06"
                            }   
    }
    return tempoControllatoRandom
}

function impostoPrezzo(badge,dest){
    prezzo=0
    paesiVicini = ["Austria","Francia","Germania","Grecia","Polonia"]
    paesiLontani  = ["Canada","Cina","Brazile","Colombia","India","Russia","Stati Uniti","Sud Africa"]
    paesiMedio = ["Marocco","Egitto","Inghilterra","Giordania",,"Spagna"]

    for(var i=0;i<5;i++){
        if(dest==paesiVicini[i]){
           paeseRq = "vicino"
        }   
    }

    for(var i=0;i<8;i++){
        if(dest==paesiLontani[i]){
            paeseRq = "lontano"
         }   
    }

    for(var i=0;i<5;i++){
        if(dest==paesiMedio[i]){
            paeseRq = "medio"
         } 
    }



    if(badge=="Diretto"){
        if(paeseRq=="vicino"){
            prezzo = randomNum(80,200)
        }else if(paeseRq=="lontano"){
                prezzo = randomNum(650,450)
            }else if(paeseRq=="medio"){
                    prezzo = randomNum(300,150)
            }
        }else if(badge=="1 Scalo"){
            if(paeseRq=="vicino"){
                prezzo = randomNum(230,150)
            }else if(paeseRq=="lontano"){
                    prezzo = randomNum(650,550)
                }else if(paeseRq=="medio"){
                        prezzo = randomNum(330,250)
                    }        
        }else if(badge=="2 Scali"){
            if(paeseRq=="vicino"){
                prezzo = randomNum(320,250)
            }else if(paeseRq=="lontano"){
                    prezzo = randomNum(840,700)
                }else if(paeseRq=="medio"){
                        prezzo = randomNum(450,340)
                }
        }else if(badge=="3 Scali"){
            if(paeseRq=="vicino"){
                prezzo = randomNum(380,350)
            }else if(paeseRq=="lontano"){
                    prezzo = randomNum(980,850)
                }else if(paeseRq=="medio"){
                        prezzo = randomNum(530,350)
                }
        }

    
    
    if(tipoViaggio=="soloAndata" || tipoViaggio==undefined){
        return prezzo + " " + "€" 
    }else{
        return prezzo*2 + " " + "€" 
    }
}


if(tipoViaggio=='soloAndata' || tipoViaggio==undefined){ 

    sessionStorage.setItem("tipoViaggio","soloAndata")
    //elementi solo andata
    elementiA = document.querySelectorAll(".cardA")
    //titoli
    titoloBigliettoA = document.querySelectorAll('.titoloBigliettoA') 
    badgeBigliettoA = document.querySelectorAll('.stopBigliettoA')

    //data di partenza
    dataBigliettoA = document.querySelectorAll('.dataBigliettoA') 

    //ora e posto di partenza
    oraParBigliettoA = document.querySelectorAll('.oraParBigliettoA')
    postoParBigliettoA = document.querySelectorAll('.postoParBigliettoA')

    //ora e posto d'arrivo
    oraArrBigliettoA = document.querySelectorAll('.oraArrivoBigliettoA')
    postoArrBigliettoA = document.querySelectorAll('.postoArrivoBigliettoA')
    
    //prezzo biglietto
    prezzoBigliettoA = document.querySelectorAll('.prezzoBigliettoA')

    divAndata.style.display="inline-block"
    divAndataRitorno.style.display="none"

    var tempoAttuale = new Date()     
    var oraAttuale = tempoAttuale.getHours()
    var minAttuali = tempoAttuale.getMinutes()

    //numero di Biglietti
    NumBigliettiRandom = randomNum(5,1)

    //impostazione array badge
    var arrayBadge = ["Diretto","1 Scalo","2 Scali","3 Scali"]

    for(var i=0;i<NumBigliettiRandom;i++){
        if(i<divAndata.childElementCount){
            elementiA[i].style.display = "block"
        }
        
        //imposto il titolo per ogni biglietto
        titoloBigliettoA[i].innerHTML = "Da " + postoPartenza + " a " +  destinazione 

        //estraggo un "badge" casuale e lo imposto per ogni biglietto
        bigliettoBadgeRandom = Math.floor(Math.random() * 4);
        if(bigliettoBadgeRandom!=0){ //se il badge di biglietto è diverso da "diretto" allora cambia backgroundColor in  rosso
            badgeBigliettoA[i].setAttribute("class","badge badge-success d-inline-block float-right bg-danger text-white stopBigliettoA") 
        } 
        badgeBigliettoA[i].innerHTML = arrayBadge[bigliettoBadgeRandom] 

        //imposto la data del biglietto come data richiesta dall'utente
        dataBigliettoA[i].innerHTML = dataPartenza


        //imposto il prezzo del biglietto i esima
        prezzoBigliettoA[i].innerHTML = impostoPrezzo(badgeBigliettoA[i].innerHTML,destinazione)

        //estraggo un tempo random per ogni biglietto
        var oraParRandom = controlloTempo(oraAttuale,23,0)
        var minParRandom = controlloTempo(minAttuali,59,0)
        var oraArrRandom = controlloTempoArrivo(oraParRandom,arrayBadge[bigliettoBadgeRandom])
        var minArrRandom = controlloTempo(minAttuali,59,0)


        //imposto ora di partenza del biglietto i esima
        oraParBigliettoA[i].innerHTML = oraParRandom + ":" + minParRandom

        //imposto ora d'arrivo del biglietto i esima
        oraArrBigliettoA[i].innerHTML = oraArrRandom + ":" + minArrRandom

        //imposto posto partenza del biglietto i esima
        arrayCittaParArr = cercoCitta()
        postoParBigliettoA[i].innerHTML = arrayCittaParArr[0]
        postoArrBigliettoA[i].innerHTML = arrayCittaParArr[1]

        ordinoPrezzo[i] = prezzoBigliettoA[i].innerHTML

    }
    ordinoPrezzo.sort(function(a, b) {
        return a - b;
    });
    document.querySelector(".trovPrezzoM").innerHTML = "meno Caro " +  ordinoPrezzo[0]
    ordinoPrezzo.sort(function(a, b) {
        return b - a;
    });
    document.querySelector(".trovPrezzoC").innerHTML = "Più Caro " +  ordinoPrezzo[0]

}else{
    sessionStorage.setItem("tipoViaggio","andataRitorno")

    dataRitorno = sessionStorage.getItem('dataRitorno')  

    //elementi andata e ritorno
    elementiA = document.querySelectorAll(".cardAR")
    //titoli
    titoloBigliettoAR = document.querySelectorAll('.titoloBigliettoAR') 
    badgeBigliettoAR = document.querySelectorAll('.stopBigliettoAR')

    //data di partenza
    dataBigliettoAR = document.querySelectorAll('.dataBigliettoAR') 

    //ora e posto di partenza
    oraParBiglietto1AR = document.querySelectorAll('.oraParBiglietto1AR')
    postoParBiglietto1AR = document.querySelectorAll('.postoParBiglietto1AR')

    //ora e posto d'arrivo
    oraArrBiglietto1AR = document.querySelectorAll('.oraArrivoBiglietto1AR')
    postoArrBiglietto1AR = document.querySelectorAll('.postoArrivoBiglietto1AR')

    //data ritorno
    dataRitBigliettoAR = document.querySelectorAll('.dataRitBigliettoAR') 

    //ora e posto di partenza
    oraParBiglietto2AR = document.querySelectorAll('.oraParBiglietto2AR')
    postoParBiglietto2AR = document.querySelectorAll('.postoParBiglietto2AR')

    //ora e posto d'arrivo
    oraArrBiglietto2AR = document.querySelectorAll('.oraArrivoBiglietto2AR')
    postoArrBiglietto2AR = document.querySelectorAll('.postoArrivoBiglietto2AR')

    //prezzo biglietto
    prezzoBigliettoAR = document.querySelectorAll('.prezzoBigliettoAR')

    divAndata = document.querySelector('.soloAndataDiv')

    divAndata.style.display="none"
    divAndataRitorno.style.display="inline-block"

    //numero di Biglietti
    NumBigliettiRandom = randomNum(5,1)

    //impostazione array badge
    var arrayBadge = ["Diretto","1 Scalo","2 Scali","3 Scali"]

    for(var i=0;i<NumBigliettiRandom;i++){
        if(i<divAndataRitorno.childElementCount){
            elementiA[i].style.display = "block"
        }
        
        //imposto il titolo per ogni biglietto
        titoloBigliettoAR[i].innerHTML = "Da " + postoPartenza + " a " +  destinazione 



        //estraggo un "badge" casuale e lo imposto per ogni biglietto
        bigliettoBadgeRandom = Math.floor(Math.random() * 2);
        if(bigliettoBadgeRandom!=0){ //se il badge di biglietto è diverso da "diretto" allora cambia backgroundColor in  rosso
            badgeBigliettoAR[i].setAttribute("class","badge badge-success d-inline-block float-right bg-danger text-white stopBigliettoA") 
        } 
        badgeBigliettoAR[i].innerHTML = arrayBadge[bigliettoBadgeRandom] 

        //imposto la data del biglietto come data richiesta dall'utente
        dataBigliettoAR[i].innerHTML = dataPartenza
        dataRitBigliettoAR[i].innerHTML = dataRitorno

        //imposto il prezzo del biglietto i esima
        prezzoBigliettoAR[i].innerHTML = impostoPrezzo(badgeBigliettoAR[i].innerHTML,destinazione)

        //estraggo un tempo random per ogni biglietto
        var oraParRandom1 = controlloTempo(oraAttuale,23,0)
        var minParRandom1 = controlloTempo(minAttuali,59,0)
        var oraArrRandom1 = controlloTempoArrivo(oraParRandom1,arrayBadge[bigliettoBadgeRandom])
        var minArrRandom1 = controlloTempo(minAttuali,59,0)
        var oraParRandom2 = controlloTempo(oraAttuale,23,0)
        var minParRandom2 = controlloTempo(minAttuali,59,0)
        var oraArrRandom2 = controlloTempoArrivo(oraParRandom2,arrayBadge[bigliettoBadgeRandom])
        var minArrRandom2 = controlloTempo(minAttuali,59,0)

        //imposto ora di partenza del biglietto i esima
        oraParBiglietto1AR[i].innerHTML = oraParRandom1 + ":" + minParRandom1
        oraParBiglietto2AR[i].innerHTML = oraParRandom2 + ":" + minParRandom2

        //imposto ora d'arrivo del biglietto i esima
        oraArrBiglietto1AR[i].innerHTML = oraArrRandom1 + ":" + minArrRandom1
        oraArrBiglietto2AR[i].innerHTML = oraArrRandom2 + ":" + minArrRandom2

        //imposto posto partenza  e d'arrivo del biglietto i esima
        arrayCittaParArr1 = cercoCitta()
        arrayCittaParArr2 = cercoCitta()
        postoParBiglietto1AR[i].innerHTML = arrayCittaParArr1[0]
        postoArrBiglietto1AR[i].innerHTML = arrayCittaParArr1[1]
        postoParBiglietto2AR[i].innerHTML = arrayCittaParArr2[0]
        postoArrBiglietto2AR[i].innerHTML = arrayCittaParArr2[1]

        ordinoPrezzo[i] = prezzoBigliettoAR[i].innerHTML

    }
    ordinoPrezzo.sort(function(a, b) {
        return a - b;
    });
    document.querySelector(".trovPrezzoC").innerHTML = "Più Caro " +  ordinoPrezzo[0]
    ordinoPrezzo.sort(function(a, b) {
        return b - a;
    });
    document.querySelector(".trovPrezzoM").innerHTML = "meno Caro " +  ordinoPrezzo[0]
}


function acquista(){
    accediLinkFooter = document.querySelector("#accediFooter")
  
    if(localStorage.getItem("nomeUtenteLoggato")==undefined){
        if(localStorage.getItem("nomeUtenteLoggato")==undefined){
            swal({
              title: "Attenzione",
              text: "Per aquistare il biglietto l'utente deve essere loggato!",
              icon: "warning",
              button: "Ok",
            });
        }
    }else{
        swal({
            title: "Contratulazioni",
            text: "Biglietto acquistato con successo!",
            icon: "success",
            button: "Grazie",
        });
        numUL = localStorage.getItem("utenteLoggato") 
        regBU = "BigliettiAcqUtente" + numUL
        if(localStorage.getItem(regBU)==undefined){ 
            localStorage.setItem(regBU,1)
        }else{
            bigliettiAqU = localStorage.getItem(regBU)
            sommoB= parseInt(bigliettiAqU) + 1
            localStorage.setItem(regBU,sommoB)
        }

    }
}



