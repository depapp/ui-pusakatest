const LoginPage = require('../pages/login.page')

describe('Example E2E Test on Android', () => {
    it('should login with valid credentials', () => {
        //add your test here
        LoginPage.open()
        LoginPage.login('test@webdriver.io', 'Test1234!')
    })
})
