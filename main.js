const keys = document.querySelectorAll('.key')

function playNotes(event) {
    
    let audioKeyCode = getKeyCode(event)
    // pegar keycode do audio
    
    const keyPressed = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    // tecla pressionada

    const cantFoundAnyKey = !keyPressed
    // verificar se a key existe

    if(cantFoundAnyKey) {
        
        return;
    } 
    
    playAudio(audioKeyCode)
}

function getKeyCode(event) {
    
    const iskeyboard = event.type === "keydown"
    // true ou false     

    if (iskeyboard) {
        
        keyCode = event.keyCode;
        //keyCode é um elemento HTML ref. ao codigo da tecla
    
    } else {
        
        keyCode = event.target.dataset.key;
        //caminho alternativo que contem o keycode
    }
    
    return keyCode
}

function playAudio(audioKeyCode) {
    
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}


keys.forEach(function(key){
// para cada tecla das teclas(keys) rodar function(key)        
    
    key.addEventListener("click", playNotes)
}
)

window.addEventListener("keydown", playNotes)
