const LoginPage = require('../../../pages/swaglabs/auth/login.page')
const HomePage = require('../../../pages/swaglabs/home/home.page')

describe('login', () => {

    beforeEach('navigate to login page', () => {
        LoginPage.open()
    })

    it('user should be able to login using valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce')
        HomePage.verify()
    })

})