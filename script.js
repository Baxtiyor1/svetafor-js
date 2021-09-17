let rec = new webkitSpeechRecognition();
let elRed = document.querySelector('#red');
let elYellow = document.querySelector('#yellow');
let elGreen = document.querySelector('#green');
let elResultPlace = document.querySelector('#resultplace');
let elWrapper = document.querySelector('.wrapper')
let elBtn = document.querySelector('#btn')

elBtn.addEventListener('click', function(){
    rec.start()
    
    // rec.lang = 'en-US';
    
    rec.onerror = function(e) {
        elResultPlace.textContent = 'Qaysi rangni hohlaysiz'
    }
    
    rec.onend = function(e){
        console.log('aloqa tugadi')
    }
    
    rec.onresult = function(e){
        if(e.results[0][0].transcript == 'красный'){
            elGreen.style.background = ''
            elYellow.style.background = ''
            elRed.style.background = 'red'
            elResultPlace.textContent = e.results[0][0].transcript
            elResultPlace.style.borderBottom = '2px solid red'
            elWrapper.style.boxShadow = '5px 5px 5px red, -5px -5px 5px red, 5px -5px 5px red, -5px 5px 5px red'
        }else if(e.results[0][0].transcript == 'жёлтый'){
            elRed.style.background = ''
            elGreen.style.background = ''
            elYellow.style.background = 'gold'
            elResultPlace.textContent = e.results[0][0].transcript
            elResultPlace.style.borderBottom = '2px solid yellow'
            elWrapper.style.boxShadow = '5px 5px 5px yellow, -5px -5px 5px yellow, 5px -5px 5px yellow, -5px 5px 5px yellow'
        }else if(e.results[0][0].transcript == 'зелёный'){
            elYellow.style.background = ''
            elResultPlace.textContent = e.results[0][0].transcript
            elResultPlace.style.borderBottom = '2px solid green'
            elWrapper.style.boxShadow = '5px 5px 5px green, -5px -5px 5px green, 5px -5px 5px green, -5px 5px 5px green'
            elGreen.style.background = 'green'
        }else{
            elResultPlace.textContent = e.results[0][0].transcript
        }
    }
})

