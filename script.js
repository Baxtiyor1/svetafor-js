let rec = new webkitSpeechRecognition();
let elRed = document.querySelector('#red');
let elYellow = document.querySelector('#yellow');
let elGreen = document.querySelector('#green');
let elResultPlace = document.querySelector('#resultplace');
let elWrapper = document.querySelector('.wrapper')
let elBtn = document.querySelector('#btn')
let elSubTitle = document.querySelector('#subtitle')


function autoTimeUpdate(){
    const elTime = document.querySelector('#time')
    const elHour = document.querySelector('#hour')
    let time = (day, month, year) => {
        return String(new Date().getDate()) + '.' + (new Date().getMonth() + 1) + '.' + (new Date().getFullYear())
    }
    elTime.textContent = String(time())
    
    let date = new Date()
    let h = date.getHours()
    let m = String(date.getMinutes()).padStart(2, 0)
    let s = String(date.getSeconds()).padStart(2, 0)
    
    
    elHour.textContent = (h + ':' + m + ':' + s)
}
    setInterval(autoTimeUpdate, 1000);
    
    
    elBtn.addEventListener('click', function(){
        rec.start()
        
        elSubTitle.textContent = ''
        
        rec.lang = 'Uz-uz';
        
        rec.onerror = function(e) {
            elYellow.style.background = ''
            elGreen.style.background = ''
            elRed.style.background = ''
            elResultPlace.textContent = 'Qaysi rangni hohlaysiz'
        }
        
        rec.onend = function(e){
            elSubTitle.textContent = 'Aloqa tugadi'
        }
        
        rec.onresult = function(e){
            if(e.results[0][0].transcript === 'красный' || e.results[0][0].transcript === 'qizil' || e.results[0][0].transcript === 'red'){
                elGreen.style.background = ''
                elYellow.style.background = ''
                elRed.style.background = 'red'
                elResultPlace.textContent = e.results[0][0].transcript
                elResultPlace.style.borderBottom = '2px solid red'
                elWrapper.style.boxShadow = '5px 5px 5px red, -5px -5px 5px red, 5px -5px 5px red, -5px 5px 5px red'
            }else if(e.results[0][0].transcript === 'жёлтый' || e.results[0][0].transcript === 'sariq' || e.results[0][0].transcript === 'yellow'){
                elRed.style.background = ''
                elGreen.style.background = ''
                elYellow.style.background = 'gold'
                elResultPlace.textContent = e.results[0][0].transcript
                elResultPlace.style.borderBottom = '2px solid yellow'
                elWrapper.style.boxShadow = '5px 5px 5px yellow, -5px -5px 5px yellow, 5px -5px 5px yellow, -5px 5px 5px yellow'
            }else if(e.results[0][0].transcript === 'зелёный' || e.results[0][0].transcript === 'yashil' || e.results[0][0].transcript === 'green'){
                elYellow.style.background = ''
                elRed.style.background = ''
                elResultPlace.textContent = e.results[0][0].transcript
                elResultPlace.style.borderBottom = '2px solid green'
                elWrapper.style.boxShadow = '5px 5px 5px green, -5px -5px 5px green, 5px -5px 5px green, -5px 5px 5px green'
                elGreen.style.background = 'green'
            }else{
                elYellow.style.background = ''
                elGreen.style.background = ''
                elRed.style.background = ''
                elResultPlace.textContent = e.results[0][0].transcript
            }
        }
    })
    
    