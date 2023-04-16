const form = document.querySelector('form')

new window.JustValidate('form', {
    rules: {
        firstName: {required: true},
        lastName: {
            required: true,
            minLength: 3,
            maxLength: 15,
        },
        email: {required: true},
        password: {required: true},
    },
    colorWrong: '#ff0f0f',
})