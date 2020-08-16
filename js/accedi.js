contaImg=0
function correggoEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

setInterval(function(){ 
    $('.imgDiv').fadeTo('slow', 0.2, function()
    {
      if(contaImg==0){
        $(this).css('background-image', 'url(./../collegamenti/img/pagRegistraImg/bgImg2.jpg)');
        contaImg++;
      }else if(contaImg==1){
          $(this).css('background-image', 'url(./../collegamenti/img/pagRegistraImg/bgImg3.jpg)');
          contaImg++;
        }else if(contaImg==2){
          $(this).css('background-image', 'url(./../collegamenti/img/pagRegistraImg/bgImg1.jpg)');
          contaImg++;
        }
      
      if(contaImg==3){
        contaImg=0;
      }
    }).fadeTo('slow', 1);
  }, 8000);

function AccediMi(){
    var ip = document.querySelectorAll('.inputs')
    var accediBtn = document.querySelector('.btn-success')
    var utentiRegistrati = localStorage.getItem("Utenti Registrati")
    var notifier = new Notifier
    if(ip[0].value=="" || ip[1].value==""){
        notifier.notify("info", "Devi compilare tutti i campi");
    }else{
        if(correggoEmail(ip[0].value)==false){
            notifier.notify("error", "Email non valido!");
        }else{
            if(utentiRegistrati==undefined || utentiRegistrati==0){
                notifier.notify("error", "Utente non registrato!");
            }else{
                for(var i=0;i<parseInt(utentiRegistrati);i++){
                    emailU = "emailUtente" + i
                    passwordU = "passwordUtente" + i
                    email = localStorage.getItem(emailU)
                    password = localStorage.getItem(passwordU)
                    if(ip[0].value==email ){
                        if(ip[1].value!=password){
                            notifier.notify("error", "Password non coincide con email inserito!");
                        }else{
                            sessionStorage.setItem("accessoAlert","true")
                            accediBtn.setAttribute("href","./../index.html")
                            numU = i
                            localStorage.setItem("utenteLoggato", numU)
                            var utenteL = localStorage.getItem('utenteLoggato')
                            var nomeU = 'nomeUtente' + utenteL
                            var nomeUF = localStorage.getItem(nomeU)
                            localStorage.setItem("nomeUtenteLoggato",nomeUF)
                            var cognomeU = 'cognomeUtente' + utenteL
                            var cognomeUF = localStorage.getItem(cognomeU)
                            localStorage.setItem("cognomeUtenteLoggato",cognomeUF)
                            var emailU = 'emailUtente' + utenteL
                            var emailUF = localStorage.getItem(emailU)
                            localStorage.setItem("emailUtenteLoggato",emailUF)
                            var passwordU = 'passwordUtente' + utenteL
                            var passwordUF = localStorage.getItem(passwordU)
                            localStorage.setItem("passwordUtenteLoggato",passwordUF)
                            var sessoU = 'sessoUtente' + utenteL
                            var sessoUF = localStorage.getItem(sessoU)
                            localStorage.setItem("sessoUtenteLoggato",sessoUF)
                            var ricordaU = 'ricordaUtente' + utenteL
                            var ricordaUF = localStorage.getItem(ricordaU)
                            localStorage.setItem("ricordaUtenteLoggato",ricordaUF)
                        }
                    }else{
                        notifier.notify("error", "Utente non registrato!");
                    }
                }
            }    

        }

    }
}
