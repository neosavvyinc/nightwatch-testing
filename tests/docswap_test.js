module.exports = {

    'Landing Page Validation' : function(browser) {
        var docSwapHomePage = browser.page.docswap.home_page();

        docSwapHomePage.navigate();

        docSwapHomePage.expect
            .element('@borrowerSignupBtn')
            .to.be.present.before(1000);

        docSwapHomePage
            .waitForElementVisible('@borrowerSignupEmailAddressInput', 1000)
            .setValue('@borrowerSignupEmailAddressInput', 'aparrish@neosavvy.com');

        docSwapHomePage.click('@borrowerSignupBtn');

        docSwapHomePage.waitForElementVisible('@borrowerSignupErrorBox', 1000);

        browser.end();
    }

};