const allureReporter = require('@wdio/allure-reporter').default

const Page = require('../common/page')

const selectors = {
    inputUsername: '#user-name',
    inputPassword: '#password',
    buttonSubmit: '#login-button'
}

class LoginPage extends Page {

    open() {
        allureReporter.addStep('open `home` page')
        return super.open()
    }

    login (username, password) {
        allureReporter.addStep('login')
        $(selectors.inputUsername).setValue(username)
        $(selectors.inputPassword).setValue(password)
        $(selectors.buttonSubmit).click()
    }
    
}

module.exports = new LoginPage()