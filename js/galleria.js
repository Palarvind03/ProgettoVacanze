imgStato=0
maxImg=4
function chiudiBigImg(){
    ImgDiv = document.querySelector('.bigImgDiv') 
    content = document.querySelector('.starterBg')
    footer = document.querySelector("#foot")
    ImgDiv.style.display="none"
    content.style.display="block"
    footer.style.display="block"
}

function imgShower(imgNum){
    ImgDiv = document.querySelector('.bigImgDiv') 
    bigimg = document.querySelector('.bImg') 
    bigimgT = document.querySelector('.bImgTitle') 
    content = document.querySelector('.starterBg')
    footer = document.querySelector("#foot")
    imgs = document.querySelectorAll('.img')
    arrowf = document.querySelector('.arrowF') 
    arrowb = document.querySelector('.arrowB') 
    ImgDiv.style.display="block"
    content.style.display="none"
    bigimg.src=imgs[imgNum].src
    bigimgT.innerText=imgs[imgNum].alt
    imgStato=imgNum

    footer.style.display="none"

    if(bigimgT.innerText=="Austria"){
        arrowb.style.visibility="hidden"
    }else{
        arrowb.style.visibility="visible" 
    }

    if(bigimgT.innerText=="Egitto" || bigimgT.innerText=="Giordania" || bigimgT.innerText=="Sud Africa"){
        arrowf.style.visibility="hidden"
    }else{
        arrowf.style.visibility="visible"
    }
}


function caricaImg(numBtn){
    divBtnCarica1=document.querySelector(".divBtnCaricaImg1")
    divBtnCarica2=document.querySelector(".divBtnCaricaImg2")
    imgSez2=document.querySelector(".sez2")
    imgSez3=document.querySelector(".sez3")
    
    if(numBtn==1){
        divBtnCarica1.style.display="none"
        imgSez2.style.display="inline-flex"
        maxImg=maxImg+6
    }
    if(numBtn==2){
        divBtnCarica2.style.display="none"
        imgSez3.style.display="inline-flex"
        maxImg=maxImg+6
    }
}

function avantiImg(){
    imgs = document.querySelectorAll('.img')
    bigimg = document.querySelector('.bImg') 
    bigimgT = document.querySelector('.bImgTitle') 
    arrowf = document.querySelector('.arrowF') 
    arrowb = document.querySelector('.arrowB') 
    bigimgT = document.querySelector('.bImgTitle') 

    if(bigimgT.innerText=="Austria"){
        arrowb.style.visibility="visible"
    }

    if(imgStato==maxImg){
        arrowf.style.visibility="hidden"
    }

    if(imgStato<=maxImg){
        bigimg.src=imgs[imgStato+1].src
        bigimgT.innerText=imgs[imgStato+1].alt
        imgStato++
    }
}

function indietroImg(){
    imgs = document.querySelectorAll('.img')
    bigimg = document.querySelector('.bImg')
    bigimgT = document.querySelector('.bImgTitle') 
    arrowf = document.querySelector('.arrowF') 
    arrowb = document.querySelector('.arrowB') 

    if(bigimgT.innerText=="Brazile"){
        arrowb.style.visibility="hidden"
    }

    if(imgStato>maxImg){
        arrowf.style.visibility="visible"
    }

    bigimg.src=imgs[imgStato-1].src
    bigimgT.innerText=imgs[imgStato-1].alt
    imgStato--
}