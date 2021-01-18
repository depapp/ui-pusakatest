const LoginPage = require('../../pages/auth/login.page')

describe('login', () => {

    beforeEach('navigate to login page', () => {
        LoginPage.open()
    })

    it('user should be able to login using valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce')
    })

})