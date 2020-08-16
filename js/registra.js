var giroImg=2
var sessoS=false
var sessoUtente
var contaImg=0
$(function() {

    $('#nome').keydown(function (e){
    
      if (e.shiftKey || e.ctrlKey || e.altKey) {
      
        e.preventDefault();
        
      } else {
      
        var key = e.keyCode;
        
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        
          e.preventDefault();
          
        }
  
      }
      
    });

    $('#cognome').keydown(function (e){
    
        if (e.shiftKey || e.ctrlKey || e.altKey) {
        
          e.preventDefault();
          
        } else {
        
          var key = e.keyCode;
          
          if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
          
            e.preventDefault();
            
          }
    
        }
        
      });
    
});

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

function correggoEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sesso(s){
  iconM=document.querySelector(".fa-male")
  iconF=document.querySelector(".fa-female")
  sessoS=true
  if(s=="m"){
      iconM.style.color="#fce38a"
      iconF.style.color="#333333"
      sessoUtente = "male"
  }else{
      iconF.style.color="#fce38a"
      iconM.style.color="#333333"
      sessoUtente = "female"
  }
}


function registraMi(){
    var alert=document.querySelector('.alert-danger')
    var ip = document.querySelectorAll('.inputs')
    var bs = document.querySelector('.btn-success')
    var check = document.querySelector('#mioCheck')
    var notifier = new Notifier
    if(ip[0].value=="" || ip[1].value=="" || ip[2].value=="" || ip[3].value==""){
      notifier.notify("info", "Devi compilare tutti i campi");
    }else{
        if(correggoEmail(ip[2].value)==false){
          notifier.notify("error", "Email non valido!");
        }else{
            alert.style.display="none"
            if(ip[3].value.length<8){
                notifier.notify("info", "Password deve essere lungo almeno 8 caratteri");
            }else{
              if(sessoS==false){
                notifier.notify("error", "Sesso non selezionato!");
              }else{
                if(localStorage.getItem("Utenti Registrati")==undefined){
                  localStorage.setItem('Utenti Registrati', "0")
                } 
                utentiRegistrati = localStorage.getItem("Utenti Registrati")
                contUR = parseInt(utentiRegistrati)+1
                localStorage.setItem('Utenti Registrati', contUR)
                nomeU = "nomeUtente" + utentiRegistrati
                cognomeU = "cognomeUtente" + utentiRegistrati
                emailU = "emailUtente" + utentiRegistrati
                passwordU = "passwordUtente" + utentiRegistrati
                ricordaU = "ricordaUtente" + utentiRegistrati
                sessoU = "sessoUtente" + utentiRegistrati
                localStorage.setItem(nomeU, ip[0].value)
                localStorage.setItem(cognomeU, ip[1].value)
                localStorage.setItem(emailU, ip[2].value)
                localStorage.setItem(passwordU, ip[3].value)
                localStorage.setItem(sessoU, sessoUtente)
                if(check.checked){
                    localStorage.setItem(ricordaU, 'true')
                }else{
                    localStorage.setItem(ricordaU, 'false')
                }
                sessionStorage.setItem("registrazioneAlert","true")
                bs.setAttribute("href","./../index.html")
              }
            }  
        }
    }
}