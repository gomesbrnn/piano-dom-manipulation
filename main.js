const keys = document.querySelectorAll('.key')

function playNotes(event) {
    
    let audioKeyCode = getKeyCode(event)
    
    const keyPressed = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    const cantFoundAnyKey = !keyPressed
    
    if(cantFoundAnyKey) {
        
        return;
    } 
    
    playAudio(audioKeyCode)
}

function getKeyCode(event) {
    
    const iskeyboard = event.type === "keydown"
        
    if (iskeyboard) {
        
        keyCode = event.keyCode;
        
    } else {
        
        keyCode = event.target.dataset.key;
    }
    
    return keyCode
}

function playAudio(audioKeyCode) {
    
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}


keys.forEach(function(key){
     
    key.addEventListener("click", playNotes)
}
)

window.addEventListener("keydown", playNotes)
