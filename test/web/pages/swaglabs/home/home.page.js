const allureReporter = require('@wdio/allure-reporter').default

const selectors = {
    title: '.product_label'
}

class HomePage {

    verify() {
        allureReporter.addStep('verify `home` page')
        $(selectors.title).isDisplayed()
    }

}

module.exports = new HomePage()