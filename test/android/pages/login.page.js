class LoginPage {

    //add your element here
    get goToLogin () { return $('//*[@text="Login"]') }
    get inputEmail () { return $('//*[@text="Email"]') }
    get inputPassword () { return $('//*[@text="Password"]') }
    get btnSubmit () { return $('//*[@text="LOGIN"]') }

    open () {
        this.goToLogin.click()
    }

    login (username, password) {
        //add your test here
        this.inputEmail.setValue(username)
        this.inputPassword.setValue(password)
        this.btnSubmit.click()
    }

}

module.exports = new LoginPage();