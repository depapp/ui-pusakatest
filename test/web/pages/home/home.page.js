const selectors = {
    title: '.product_label'
}

class HomePage {

    verify() {
        $(selectors.title).isDisplayed()
    }

}

module.exports = new HomePage()