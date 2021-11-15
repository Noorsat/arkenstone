const popupLinks = document.querySelectorAll('.sign-up');

let unlock = true;


if (popupLinks.length > 0){
    for (let i = 0; i < popupLinks.length;i++){
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            console.log(popupLink);
            const popupName = popupLink.getAttribute('href').replace("#","");
            const currentPopup =  document.getElementById(popupName);
            popupOpen(currentPopup);    
            e.preventDefault();
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0){
    for (let i = 0; i < popupCloseIcon.length; i++){
        const el = popupCloseIcon[i];
        el.addEventListener("click", function (e){
                popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(currentPopup){
    console.log(currentPopup)
    if (currentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive,false);
        } 
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e){
            if (!e.target.closest('.popup__body')){
                popupClose(e.target.closest('.popup'))
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true){
    if (unlock){
        popupActive.classList.remove('open');
    }
}    


function addUser(){
    const mail = document.querySelector('.mail').value;
    const phone = document.querySelector('.phone').value;
    const password = document.querySelector('.password').value;
    const password__confirm = document.querySelector('.password__confirm').value;
    
    const response = fetch("https://html-css-test-task.arkenstone.agency/registration", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body:'{"email":"test@test.com","phone":"+7(777) 777-77-77","password":"123qwerty","password_confirmation":"123qwerty"}'
    });
}

function addMail(){
    const response = fetch("https://html-css-test-task.arkenstone.agency/feedback", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body:'{"email":"test@test.com"}'
    });
}



const regButton = document.querySelector('.reg__button');
const mailReg = document.querySelector('.mail__reg');

regButton.addEventListener('click', function (e) {
    addUser();
})

mailReg.addEventListener('click', function (e) {
    addMail();
})

const anchors = document.querySelectorAll('a[href*="#"]') 

for (let anchor of anchors){
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        const id = anchor.getAttribute('href');
        document.querySelector(''+id).scrollIntoView({
            behavior:"smooth",
            block:"center",
        })
    })
}