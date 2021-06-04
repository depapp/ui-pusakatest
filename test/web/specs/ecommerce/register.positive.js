const AuthPage = require('../../pages/ecommerce/auth.page')
const Chance = require('chance')

describe('ecommerce', () => {

    it('register using valid credentials', () => {
        const chance = new Chance()
        const firstName = chance.first()
        const lastName = chance.last()
        AuthPage.open()
        AuthPage.register(chance.email({ domain: "mailinator.com" }))
        AuthPage.registerForm(
            firstName,
            lastName,
            '123123123',
            chance.company(),
            chance.address(),
            chance.city(),
            chance.state({ full: true, country: 'us' }),
            chance.zip(),
            chance.phone()
        )
        AuthPage.verifyAccount(firstName+' '+lastName)
    })

})