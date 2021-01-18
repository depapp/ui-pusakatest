const Page = require('../common/page')

class LoginPage extends Page {

    get inputUsername() { return $('#user-name') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('#login-button') }

    open() {
        return super.open()
    }

    login (username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.btnSubmit.click()
    }
    
}

module.exports = new LoginPage()