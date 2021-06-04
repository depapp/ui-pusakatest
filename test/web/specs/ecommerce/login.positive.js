const AuthPage = require('../../pages/ecommerce/auth.page')

describe('ecommerce', () => {

    it('login using valid credentials', () => {
        AuthPage.open()
        AuthPage.login('pusakatest@mailinator.com', '123123123')
        AuthPage.verifyAccount('Pusaka Test')
    })

})