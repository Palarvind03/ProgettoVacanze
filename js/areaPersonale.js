utenteL = localStorage.getItem('utenteLoggato')
var notifier = new Notifier({
    position: 'top-right',
    direction: 'top'
})
function settaNumero(){
    var infobox = document.querySelectorAll('.infoUtente')
    var modificaInfo = document.querySelectorAll('.modifica')
    numeroU = "numeroUtente" + utenteL

    if(localStorage.getItem(numeroU)!=undefined){
        infobox[2].innerText = localStorage.getItem(numeroU)
    }else{
        swal("Inserire il tuo numero di telefono:", {
            content: "input",
          })
          .then((value) => {
            if(value=="" || value==null){
                notifier.notify("error", "Campo non compilato");
            }
            else{
                if(!/^[0-9]+$/.test(value)){
                    notifier.notify("error", "Sono ammessi soltanto i caratteri numerici!");
                }else{
                    if(value.length==10){
                        infobox[2].innerText = value
                        notifier.notify("success", "Numero di telefono impostato con successo");
                        modificaInfo[0].style.display="block"
                        localStorage.setItem(numeroU,value)
                    }else{
                        notifier.notify("error", "Numero di telefono non valido!");
                    }
                }
            }
        });
    }
}

function modificaNumero(){
    var infobox = document.querySelectorAll('.infoUtente')
    var modificaInfo = document.querySelectorAll('.modifica')
    numeroU = "numeroUtente" + utenteL

        swal("Inserire il tuo numero di telefono:", {
            content: "input",
          })
          .then((value) => {
            if(value=="" || value==null){
                notifier.notify("error", "Campo non compilato");
            }
            else{
                if(!/^[0-9]+$/.test(value)){
                    notifier.notify("error", "Sono ammessi soltanto i caratteri numerici!");
                }else{
                    if(value.length==10){
                        infobox[2].innerText = value
                        notifier.notify("success", "Numero di telefono modificato con successo");
                        modificaInfo[0].style.display="block"
                        localStorage.setItem(numeroU,value)
                    }else{
                        notifier.notify("error", "Numero di telefono non valido!");
                    }
                }
            }
          });
}

function settaIndirizzo(){
    var infobox = document.querySelectorAll('.infoUtente')
    var modificaInfo = document.querySelectorAll('.modifica')
    indirizzoU = "IndirizzoUtente" + utenteL

    if(localStorage.getItem(indirizzoU)!=undefined){
        infobox[3].innerText = localStorage.getItem(indirizzoU)
    }else{
        swal("Inserire il tuo indirizzo di casa:", {
            content: "input",
          })
          .then((value) => {
            if(value=="" || value==null){
                notifier.notify("error", "Campo non compilato");
            }else{
                infobox[3].innerText = value   
                notifier.notify("success", "Indirizzo di casa impostato con successo");
                modificaInfo[1].style.display="block"
                localStorage.setItem(indirizzoU,value)
            }
        });
    }
}

function modificaIndirizzo(){
    var infobox = document.querySelectorAll('.infoUtente')
    var modificaInfo = document.querySelectorAll('.modifica')
    indirizzoU = "IndirizzoUtente" + utenteL

        swal("Inserire il tuo indirizzo di casa:", {
            content: "input",
          })
          .then((value) => {
            if(value=="" || value==null){
                notifier.notify("error", "Campo non compilato");
            }else{
                infobox[3].innerText = value   
                notifier.notify("success", "Indirizzo di casa modificato con successo");
                modificaInfo[1].style.display="block"
                localStorage.setItem(indirizzoU,value)
            }
        });
}



function reqEsciAccount(){
    sessionStorage.setItem("richiestaEsciAccount","true")
}