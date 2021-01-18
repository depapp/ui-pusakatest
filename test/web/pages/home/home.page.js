class HomePage {

    get title() { return $('.product_label') }

    verify() {
        this.title.isDisplayed()
    }

}

module.exports = new HomePage()