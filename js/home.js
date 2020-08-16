var typed = new Typed('#typed', {
  strings: ['La tua vacanza inizia da qui...', 'Your holidays. Our passion' ,'Pronti, Partenza, Via..ggiamo...'],
  backSpeed: 40,
  typeSpeed: 40,
  loop: true,
  backDelay:2500,
});

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

function accediFooter(){
  accediLinkFooter = document.querySelector("#accediFooter")

  if(localStorage.getItem("nomeUtenteLoggato")==undefined){
    sessionStorage.setItem("statoPag",'accedi')
    accediLinkFooter.href = "./collegamenti/accedi.html"
  }else{
    swal({
      title: "Attenzione",
      text: "Sei già dentro un account!...Vorresti uscire dall' account attuale"+ "( " +localStorage.getItem("nomeUtenteLoggato") + " )" + "?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      buttons: ["No, Resta", "Sì, Grazie"],
    })
    .then((willDelete) => {
      if (willDelete) {
        ap=document.querySelector('.aPersonale')
        ca=document.querySelector('.contenitoreAccedi')
        ap1=document.querySelector('#aPersonale')
        ca1=document.querySelector('#contenitoreAccedi')
        pages = document.querySelectorAll('.collegamenti')
        pagesMenu = document.querySelectorAll('.collegamentiMenu')
        pages[0].style.color="#dfb55d"
        pagesMenu[0].style.color="#dfb55d"
        pages[1].style.color="#333333"
        pagesMenu[1].style.color="white"
        pages[2].style.color="#333333"
        pagesMenu[2].style.color="white"
        pages[3].style.color="#333333"
        pagesMenu[3].style.color="white"
        pages[4].style.color="#333333"
        pagesMenu[4].style.color="white"
        sessionStorage.setItem('statoPag','home')
        esciAccount()
        ap.style.display="none"
        ca.style.display="inline-block"
        ap1.style.display="none"
        ca1.style.display="inline-block"
        document.querySelector('.registra').style.display="inline-block"
      }
    });
  }

}

function areaPersonaleFooter(){
  apLinkFooter = document.querySelector("#areaPersonaleFooter")
  apLinkFooter = document.querySelector("#areaPersonaleFooter")
  if(localStorage.getItem("nomeUtenteLoggato")==undefined){
    swal({
      title: "Attenzione",
      text: "Non puoi entrare nel AREA PERSONALE se non hai fatto ancora fatto l'accesso!",
      icon: "warning",
      button: "ok",
    });
  }else{
    sessionStorage.setItem('statoPag','areaPersonale')
    apLinkFooter.setAttribute("href","./collegamenti/areaPersonale.html")
  }
}

function esplora(){
  sessionStorage.setItem('statoPag','esplora')
}