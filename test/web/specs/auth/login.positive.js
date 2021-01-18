const LoginPage = require('../../pages/auth/login.page')
const HomePage = require('../../pages/home/home.page')

describe('login', () => {

    beforeEach('navigate to login page', () => {
        LoginPage.open()
    })

    it('user should be able to login using valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce')
        HomePage.verify()
    })

})