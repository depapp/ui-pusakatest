const allureReporter = require('@wdio/allure-reporter').default

const selector = {
    emailField: '#email',
    passwordField: '#passwd',
    loginButton: '#SubmitLogin',
    accountPage: '.page-heading',
    fullName: '.account',
    registerEmailField: '#email_create',
    registerButton: '#SubmitCreate',
    genderRadio: '#uniform-id_gender1',
    firstNameField: '#customer_firstname',
    lastNameField: '#customer_lastname',
    daysOB: '#days',
    monthOB: '#months',
    yearOB: '#years',
    companyField: '#company',
    addressField: '#address1',
    cityField: '#city',
    stateField: '#id_state',
    zipField: '#postcode',
    phoneField: '#phone_mobile',
    submitButton: '#submitAccount'
}

class AuthPage {

    open() {
        allureReporter.addStep('open `login` page')
        return browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }

    register(email) {
        allureReporter.addStep('fill `register` field')
        $(selector.registerEmailField).setValue(email)
        $(selector.registerButton).click()
    }

    registerForm(firstName, lastName, password, company, address, city, state, zip, phone) {
        allureReporter.addStep('fill all `register` fields')
        $(selector.genderRadio).click()
        $(selector.firstNameField).setValue(firstName)
        $(selector.lastNameField).setValue(lastName)
        $(selector.passwordField).setValue(password)
        $(selector.companyField).setValue(company)
        $(selector.addressField).setValue(address)
        $(selector.cityField).setValue(city)
        $(selector.stateField).selectByVisibleText(state)
        $(selector.zipField).setValue(zip)
        $(selector.phoneField).setValue(phone)
        $(selector.submitButton).click()
    }

    login(username, password) {
        allureReporter.addStep('login')
        $(selector.emailField).setValue(username)
        $(selector.passwordField).setValue(password)
        $(selector.loginButton).click()
    }

    verifyAccount(fullname) {
        allureReporter.addStep('verify `account` page')
        $(selector.accountPage).isDisplayed()
        $(selector.fullName).isEqual(fullname)
    }

}

module.exports = new AuthPage()