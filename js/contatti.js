$(function() {

    $('#nome').keydown(function (e) {
    
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

$(document).ready(function() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    $("#theDate").attr("value", today);
});

function controlloNome (name) {
    var reg = new RegExp('^\\d+$');
    test = reg.test(name); 
    return test
}

function correggoEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sesso(s){
    iconM=document.querySelector(".fa-male")
    iconF=document.querySelector(".fa-female")
    sessionStorage.setItem("sessoUtenteContatti","true")
    if(s=="m"){
        iconM.style.color="#fce38a"
        iconF.style.color="#333333"
    }else{
        iconF.style.color="#fce38a"
        iconM.style.color="#333333"
    }
}

function inviami(){
    var ip=document.querySelectorAll('.ip')
    var notifier = new Notifier
    if(ip[0].value=="" || ip[1].value=="" || ip[2].value=="" || ip[3].value==""){
        notifier.notify("info", "Devi compilare tutti i campi");
    }else{
        if(correggoEmail(ip[1].value)==false){
            notifier.notify("error", "Email non valido!");
        }else{
            if(sessionStorage.getItem("sessoUtenteContatti")!="true"){
                notifier.notify("error", "Sesso non selezionato!");
            }
        }
        
        if(sessionStorage.getItem("sessoUtenteContatti")=="true" && correggoEmail(ip[1].value)==true){
            swal("Grazie!", "Abbiamo ricevuto il msg...Grazie per il tuo feedback!", "success");
        }
    }
}

