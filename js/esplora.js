function trovaDest(){
  var dest = document.querySelector('#dest')
  var dataPar = document.querySelector('#dataPar')
  var dataRit = document.querySelector('#dataRit')
  var buttonT = document.querySelector('#BtnTrova')
  var notifier = new Notifier
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


  if(sessionStorage.getItem("tipoViaggio")=="andataRitorno"){
    if(dest.value=="" || dataPar.value=="" || dataRit.value==""){
      notifier.notify("info", "Devi compilare tutti i campi");
    }else{
      if(dataPar.value<oggi && dataRit.value<oggi){
        notifier.notify("error", "Date inserite non sono valide!");
      }else{
          if(dataPar.value<oggi){
            notifier.notify("error", "Data di Partenza non valida!");
          }else if(dataPar.value>dataRit.value){
              notifier.notify("error", "Data di Ritorno non valida rispetto alla data di partenza!");
            }else{
              sessionStorage.setItem('destinazioneRq', dest.value)
              sessionStorage.setItem('dataPartenza', dataPar.value)
              sessionStorage.setItem('dataRitorno', dataRit.value)
              sessionStorage.setItem('statoPag',"main")
              buttonT.setAttribute("href","./main.html")
            }
      }   
    }
  }else{
    if(dest.value=="" || dataPar.value==""){
      notifier.notify("info", "Devi compilare tutti i campi");
    }else{
      if(dataPar.value<oggi){
        notifier.notify("error", "Data di partenza non valida!");
      }else{
        sessionStorage.setItem('destinazioneRq', dest.value)
        sessionStorage.setItem('dataPartenza', dataPar.value)
        sessionStorage.setItem('dataRitorno', dataRit.value)
        sessionStorage.setItem('statoPag','main')
        buttonT.setAttribute("href","./main.html")
      } 
    }
  }
}

function cambiaTipo(tipo){
  var dataRit = document.querySelector('#dataRit')
  var lA = document.querySelector('#labelA')
  var lAR = document.querySelector('#labelAR')
  if(tipo==1){
    sessionStorage.setItem("tipoViaggio","soloAndata")
    dataRit.style.display = "none"
    lA.style.opacity = "0.5"
    lAR.style.opacity = "1"
    lAR.style.cursor = "pointer"
    lA.style.cursor = "default"
  }else{
    sessionStorage.setItem("tipoViaggio","andataRitorno")
    dataRit.style.display = "inline-block"
    lA.style.opacity = "1"
    lAR.style.opacity = "0.5"
    lA.style.cursor = "pointer"
    lAR.style.cursor = "default"
  }
}