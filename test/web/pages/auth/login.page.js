const Page = require('../common/page')

const selectors = {
    inputUsername: '#user-name',
    inputPassword: '#password',
    buttonSubmit: '#login-button'
}

class LoginPage extends Page {

    open() {
        return super.open()
    }

    login (username, password) {
        $(selectors.inputUsername).setValue(username)
        $(selectors.inputPassword).setValue(password)
        $(selectors.buttonSubmit).click()
    }
    
}

module.exports = new LoginPage()