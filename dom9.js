
const speech = new SpeechSynthesisUtterance();
function play(){
    const message = document.getElementById('message').value
    speech.lang = 'en'
    speech.text = message
    window.speechSynthesis.speak(speech)
}