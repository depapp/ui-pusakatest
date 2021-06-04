const LoginPage = require('../../../pages/swaglabs/auth/login.page')
const HomePage = require('../../../pages/swaglabs/home/home.page')

describe('swaglabs', () => {

    beforeEach('navigate to login page', () => {
        LoginPage.open()
    })

    it('login using valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce')
        HomePage.verify()
    })

})