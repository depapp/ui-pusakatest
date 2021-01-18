const LoginPage = require('../../pages/auth/login.page')

describe('login', () => {

    it('user should be able to login using valid credentials', () => {
        LoginPage.open()
        LoginPage.login('standard_user', 'secret_sauce')
    })

})