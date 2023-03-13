const messageInputCard = document.querySelector('#message-input')
const messageLinkCard = document.querySelector('#message-link')
const messageShowCard = document.querySelector('#message-show')

const message = atob(window.location.hash.replace('#',''))
if(message){
    messageInputCard.classList.add('hide')
    messageShowCard.querySelector('h1').innerHTML=message
    messageShowCard.classList.remove('hide')
}
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    const messageInput=messageInputCard.querySelector('input')
    const encrypted = btoa(messageInput.value)
    const messageLink = messageLinkCard.querySelector('input')
    messageLink.value = `${window.location}#${encrypted}`
    messageInputCard.classList.add('hide')
    messageLinkCard.classList.remove('hide')
})
messageLinkCard.querySelector('button').addEventListener('click',event=>{
    const messageLink = messageLinkCard.querySelector('input')

    // Select the text field
    messageLink.select();
    messageLink.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(messageLink.value);

})