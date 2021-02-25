var formulario = document.querySelector("#form_contacto")
var message = document.querySelector("#message")



formulario.addEventListener('submit', (event) => {

    var email = document.querySelector("#email").value
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('email', email)
    event.preventDefault()

    if (re.test(email.toLowerCase()) == true) {
        console.log('ok')

        var pEmail = document.createElement("p")
        pEmail.innerHTML = '¡Ya estás suscripto!'
        message.appendChild(pEmail)
        pEmail.classList.add('valido')
        document.querySelector("#email").value = ''
    } else {
        var pEmail = document.createElement("p")
        pEmail.innerHTML = 'Por favor ingresá un email válido'
        message.appendChild(pEmail)
        pEmail.classList.add('invalido')
        document.querySelector("#email").value = ''
    }
})