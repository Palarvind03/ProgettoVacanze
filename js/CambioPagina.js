cont=0
function pageCaricata(){


    if(sessionStorage.getItem("richiestaEsciAccount")=="true"){
        esciAccount()
    }

    ap=document.querySelector('.aPersonale')
    ca=document.querySelector('.contenitoreAccedi')
    ap1=document.querySelector('#aPersonale')
    ca1=document.querySelector('#contenitoreAccedi')
    if(localStorage.getItem("nomeUtenteLoggato")!=undefined){
        ca.style.display="none"
        ap.style.display="block"
        ca1.style.display="none"
        ap1.style.display="block"
    }else{
        ap.style.display="none"
        ca.style.display="inline-block"
        ap1.style.display="none"
        ca1.style.display="inline-block"
    }

    pages = document.querySelectorAll('.collegamenti')
    pagesMenu = document.querySelectorAll('.collegamentiMenu')


    if(sessionStorage.getItem('statoPag')=='home' || sessionStorage.getItem('statoPag')==undefined){
        pages[0].style.color="#dfb55d"
        pagesMenu[0].style.color="#dfb55d"
        notifier = new Notifier
        if(localStorage.getItem("nomeUtenteLoggato")!=undefined){
            document.querySelector('.registra').style.display="none"
        }else{
            document.querySelector('.registra').style.display="inline-block"
        }

        if(sessionStorage.getItem("registrazioneAlert")=="true"){
            swal("Ben Fatto!", "Registrazione completata! ora puoi accedere con i tuoi dati registrati.", "success");
            sessionStorage.setItem("registrazioneAlert","false")
        }

        if(sessionStorage.getItem("accessoAlert")=="true"){
            notifier.notify("success", "Accesso completato con successo!");
            sessionStorage.setItem("accessoAlert","false")
        }
    }else{
        pages[0].style.color="#333333"
        pagesMenu[0].style.color="white"
    }
    
    if(sessionStorage.getItem('statoPag')=='chiSiamo'){
        pages[1].style.color="#dfb55d"
        pagesMenu[1].style.color="#dfb55d"
        mappa()
    }else{
        pages[1].style.color="#333333"
        pagesMenu[1].style.color="white"
    } 
    
    if(sessionStorage.getItem('statoPag')=='galleria'){
        pages[2].style.color="#dfb55d"
        pagesMenu[2].style.color="#dfb55d"
    }else{
        pages[2].style.color="#333333"
        pagesMenu[2].style.color="white"

    } 
    
    if(sessionStorage.getItem('statoPag')=='contatti'){
        pages[3].style.color="#dfb55d"
        pagesMenu[3].style.color="#dfb55d"
        cercoUtente()
    }else{
        pages[3].style.color="#333333"
        pagesMenu[3].style.color="white"
    }

    if(sessionStorage.getItem('statoPag')=='areaPersonale'){
        pages[4].style.color="#dfb55d"
        pagesMenu[4].style.color="#dfb55d"
        profileLoader()
    }else{
        pages[4].style.color="#333333"
        pagesMenu[4].style.color="white"
    }

    if(sessionStorage.getItem('statoPag')=='esplora'){
        pages[0].style.color="#333333"
        pagesMenu[0].style.color="white"
        pages[1].style.color="#333333"
        pagesMenu[1].style.color="white"
        pages[2].style.color="#333333"
        pagesMenu[2].style.color="white"
        pages[3].style.color="#333333"
        pagesMenu[3].style.color="white"
        pages[4].style.color="#333333"
        pagesMenu[4].style.color="white"

        tipoViag = sessionStorage.getItem("tipoViaggio")
        var dataRit = document.querySelector('#dataRit')
        var lA = document.querySelector('#labelA')
        var lAR = document.querySelector('#labelAR')
        if(tipoViag==undefined || tipoViag=="soloAndata"){
            dataRit.style.display = "none"
            lA.style.opacity = "0.5"
            lAR.style.opacity = "1"
            lAR.style.cursor = "pointer"
            lA.style.cursor = "default"
        }
        if(tipoViag=="andataRitorno"){
            dataRit.style.display = "inline-block"
            lA.style.opacity = "1"
            lAR.style.opacity = "0.5"
            lA.style.cursor = "pointer"
            lAR.style.cursor = "default"
        }
    }

    if(sessionStorage.getItem('statoPag')=='main'){
        divErr=document.querySelector(".divErrore")
        divOrdina= document.querySelector(".divOrdina")
        destRq = sessionStorage.getItem("destinazioneRq")
        pagT = document.querySelector("#pageTitle")
        pagT.innerHTML = "Pal's Travels" + " · Italia -" + " " + destRq
        destinazione = sessionStorage.getItem("destinazioneRq")
        foot = document.querySelector(".myFoot")

        arrayStatiDisp=[
            "Austria",
            "Brazile",
            "Canada",
            "Cina",
            "Colombia",
            "Egitto",
            "Francia",
            "Germania",
            "Grecia",
            "Inghilterra",
            "India",
            "Giordania",
            "Marocco",
            "Polonia",
            "Russia",
            "Spagna",
            "Stati Uniti",
            "Sud Africa",
        ]

        for(var k=0;k<18;k++){
            if(arrayStatiDisp[k]==destinazione){
                k=20
                var disTrovo=true
            }
        }

        setTimeout(showPage, 3000);

        function showPage() {
            if(disTrovo==true){
                document.querySelector("#loader").style.display = "none";
                document.querySelector(".mainDiv").style.display = "block";
                divOrdina.style.visibility="visible"
                divErr.style.display="none"
            }else{
                document.querySelector("#loader").style.display = "none";
                document.querySelector(".mainDiv").style.display = "none";
                divOrdina.style.visibility="hidden"
                divErr.style.display="block"
            }
            foot.style.display="block"
        }

    }
}

function mappa(){
    var map = L.map('map').setView([44.6467100, 7.4930900], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([44.6467100, 7.4930900], 12).addTo(map)
        .bindPopup("Pal's Travels")
        .openPopup();
}

function esciAccount(){
    notifier = new Notifier
    notifier.notify("success", "Uscito dall'account con successo");
    sessionStorage.setItem('statoPag','home')
    sessionStorage.setItem('richiestaEsciAccount',"false") 
    var nomeUL = 'nomeUtenteLoggato'
    localStorage.removeItem(nomeUL)
    var cognomeUL = 'cognomeUtenteLoggato'
    localStorage.removeItem(cognomeUL)
    var emailUL = 'emailUtenteLoggato'
    localStorage.removeItem(emailUL)
    var passwordUL = 'passwordUtenteLoggato'
    localStorage.removeItem(passwordUL)
    var sessoUL = 'sessoUtenteLoggato'
    localStorage.removeItem(sessoUL)
    var ricordaUL = 'ricordaUtenteLoggato'
    localStorage.removeItem(ricordaUL)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function profileLoader(){
    var emailUL = localStorage.getItem('emailUtenteLoggato')
    var userImg = document.querySelector(".userImgDiv")
    var sessoUL = localStorage.getItem('sessoUtenteLoggato')
    var txtBenvenuto = document.querySelectorAll(".benvenutoU")
    var nomeUL = localStorage.getItem('nomeUtenteLoggato') 
    var cognomeUL = localStorage.getItem('cognomeUtenteLoggato')
    var infobox = document.querySelectorAll('.infoUtente')
    var modificaInfo = document.querySelectorAll('.modifica')
    infobox[0].innerText = emailUL
    var nomeUF = capitalizeFirstLetter(nomeUL) + " " + capitalizeFirstLetter(cognomeUL) 
    if(sessoUL=='male'){
        userImg.style.backgroundImage="url(./img/man.svg)"
        txtBenvenuto[0].innerText =  nomeUF
        txtBenvenuto[1].innerText = "Benvenuto," + " " +  nomeUF
        infobox[1].innerText = "Maschio"
    }else if(sessoUL=='female'){
            userImg.style.backgroundImage="url(./img/woman.svg)"
            txtBenvenuto[0].innerText =  nomeUF
            txtBenvenuto[1].innerText = "Benvenuta," + " " +  nomeUF
            infobox[1].innerText = "Femmina"
        }

    var infobox = document.querySelectorAll('.infoUtente')
    numeroU = "numeroUtente" + utenteL

    if(localStorage.getItem(numeroU)!=undefined){
        infobox[2].innerText = localStorage.getItem(numeroU)
        modificaInfo[0].style.display="block"
    }

    indirizzoU = "IndirizzoUtente" + utenteL

    if(localStorage.getItem(indirizzoU)!=undefined){
        infobox[3].innerText = localStorage.getItem(indirizzoU)
        modificaInfo[1].style.display="block"
    }
    numUL = localStorage.getItem("utenteLoggato") 
    regBU = "BigliettiAcqUtente" + numUL
    if(localStorage.getItem(regBU)!=undefined){
        infobox[4].innerText = localStorage.getItem(regBU)
    }else{
        infobox[4].innerText = "Nessun biglietto acquistato:("
    }   
}



function cercoUtente(){
    var ip = document.querySelectorAll('.ip')
    var nomeUL = localStorage.getItem('nomeUtenteLoggato')
    var cognomeUL = localStorage.getItem('cognomeUtenteLoggato')
    var emailUL = localStorage.getItem('emailUtenteLoggato')
    var ricordaUL = localStorage.getItem('ricordaUtenteLoggato')
    var iconM=document.querySelector(".fa-male")
    var iconF=document.querySelector(".fa-female")
    var sessoUL = localStorage.getItem('sessoUtenteLoggato')
    var cn = document.querySelectorAll('.content-name')
    if(ricordaUL!=undefined && ricordaUL=="true"){
        var nomeFinale = nomeUL + " " + cognomeUL
        ip[0].value = nomeFinale
        ip[0].disabled = true
        cn[0].style.display = "none"
        ip[1].value = emailUL
        ip[1].disabled = true
        cn[1].style.display = "none"
        sessionStorage.setItem("sessoUtenteContatti","true")
        if(sessoUL=="male"){
            iconM.style.color="#fce38a"
            iconF.style.color="#333333"
        }else{
            iconF.style.color="#fce38a"
            iconM.style.color="#333333"
        }

    }else{
        sessionStorage.setItem("sessoUtenteContatti","false")
    }
}


function cambio(numPagina){
    pages = document.querySelectorAll('.collegamenti')
    pagesMenu = document.querySelectorAll('.collegamentiMenu')
    for(var i=0;i<=4;i++){
        if(i==numPagina){
            if(numPagina==0){
                if(sessionStorage.getItem('statoPag')!='home' || sessionStorage.getItem('statoPag')==undefined){
                    pages[i].setAttribute("href","./../index.html")
                    pagesMenu[i].setAttribute("href","./../index.html")
                }else{
                    pages[i].setAttribute("href","./index.html")
                    pagesMenu[i].setAttribute("href","./index.html")
                }
                sessionStorage.setItem('statoPag','home')
            }else if(numPagina==1){
                    if(sessionStorage.getItem('statoPag')=='home' || sessionStorage.getItem('statoPag')==undefined){
                        pages[i].setAttribute("href","./collegamenti/chiSiamo.html")
                        pagesMenu[i].setAttribute("href","./collegamenti/chiSiamo.html")
                    }else{
                        pages[i].setAttribute("href","./chiSiamo.html")
                        pagesMenu[i].setAttribute("href","./chiSiamo.html")
                    }
                    sessionStorage.setItem('statoPag','chiSiamo')
                }else if(numPagina==2){
                        if(sessionStorage.getItem('statoPag')=='home' || sessionStorage.getItem('statoPag')==undefined){
                            pages[i].setAttribute("href","./collegamenti/galleria.html")
                            pagesMenu[i].setAttribute("href","./collegamenti/galleria.html")
                        }else{
                            pages[i].setAttribute("href","./galleria.html")
                            pagesMenu[i].setAttribute("href","./galleria.html")
                        }
                        sessionStorage.setItem('statoPag','galleria')
                    }else if(numPagina==3){
                            if(sessionStorage.getItem('statoPag')=='home' || sessionStorage.getItem('statoPag')==undefined){
                                pages[i].setAttribute("href","./collegamenti/contatti.html")
                                pagesMenu[i].setAttribute("href","./collegamenti/contatti.html")
                            }else{
                                pages[i].setAttribute("href","./contatti.html")
                                pagesMenu[i].setAttribute("href","./contatti.html")
                            }
                            sessionStorage.setItem('statoPag','contatti')
                        }else if(numPagina==4){
                                if(sessionStorage.getItem('statoPag')=='home' || sessionStorage.getItem('statoPag')==undefined){
                                    pages[i].setAttribute("href","./collegamenti/areaPersonale.html")
                                    pagesMenu[i].setAttribute("href","./collegamenti/areaPersonale.html")
                                }else{
                                    pages[i].setAttribute("href","./areaPersonale.html")
                                    pagesMenu[i].setAttribute("href","./areaPersonale.html")
                                }
                                sessionStorage.setItem('statoPag','areaPersonale')
                            }
        }
    }
}

function menu(){
    divCollegamenti = document.querySelector('#menuFont')
    cont++;
    if(cont%2==0){
        document.querySelector('.menuContenitore').style.height=".5vh"
        document.querySelector('.menuIcon').setAttribute("class","fas fa-bars menuIcon")
    }else{
        document.querySelector('.menuContenitore').style.height="92%"
        document.querySelector('.menuIcon').setAttribute("class","fas fa-times menuIcon")
    }
}
