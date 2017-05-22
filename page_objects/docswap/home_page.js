module.exports = {
    url: 'http://localhost:9991',
    elements: {

        borrowerSignupBtn: {
            locateStrategy: "xpath",
            selector: "//button[contains(@class, 'borrower-signup-btn')]"
        },
        borrowerSignupEmailAddressInput: {
            locateStrategy: "xpath",
            selector: "//input[contains(@class, 'borrower-signup-email-address-input')]"
        },
        borrowerSignupErrorBox: {
            locateStrategy: "xpath",
            selector: "//div[contains(@class, 'alert-danger')]"
        }

    }
};