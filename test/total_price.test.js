const calculation =  require("../index");
const mock = require("../mock/advertisement");
const mockPromo = require("../mock/promo");
const assert = require("assert");
const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies')
chai.use(spies);

/**
* The following testing are to ensure each function call is correct based on the promo  
* and test based on example case from the exercise . 
*/

describe("Ensure correct function call based on promotion", function() {
    it("When discount for free item ( 3 For 2 Deals ) pass , it will run calculateFreeItem() function", () => {
        let spy = chai.spy.on(calculation, 'calculateFreeItem')
        calculation.calculateTotalAdsPrice(1,100,mockPromo.freeItemPromo);
        expect(spy).to.have.been.called()
    })

    it("When discount by special price for specific product , it will run calculateSpecialPrice function", () => {
        let spy = chai.spy.on(calculation, 'calculateSpecialPrice')
        calculation.calculateTotalAdsPrice(1,100,mockPromo.specialPrice);
        expect(spy).to.have.been.called()
    })

    it("When discount by more than any quantity get new price for each advertisement , it will run calculateDiscountPerItem() function", () => {
        let spy = chai.spy.on(calculation, 'calculateDiscountPerItem')
        calculation.calculateTotalAdsPrice(1,100,mockPromo.discountPerItem);
        expect(spy).to.have.been.called()
    })

    it("When there is no discount set , it will call calculateNormalPrice() function", () => {
        let spy = chai.spy.on(calculation, 'calculateNormalPrice')
        calculation.calculateTotalAdsPrice(1,100,mockPromo.noPromo);
        expect(spy).to.have.been.called()
    })
});

describe("Total Price Of Cart When Add All The Ads Based On Promo", function() {
    it("Calculate default user cart based on example scenarios on pdf", () => {
        const cart = { standardAd:1 , featureAd:1 , premiumAd:1 };
        const total = calculation.calculate(mock.default,cart);

        assert.equal(total,987.97)
    })

    it("Calculate UEM user cart based on example scenarios on pdf", () => {
        const cart = { standardAd:3 , featureAd:0 , premiumAd:1 };
        const total = calculation.calculate(mock.UemSunrise,cart);

        assert.equal(total,934.97)
    })

    it("Calculate Sime Darby user cart based on example scenarios on pdf", () => {
        const cart = { standardAd:0 , featureAd:3 , premiumAd:1 };
        const total = calculation.calculate(mock.SimeDarby,cart);

        assert.equal(total,1294.96)
    })

    it("Calculate IGB  user cart based on example scenarios on pdf", () => {
        const cart = { standardAd:0 , featureAd:0 , premiumAd:4 };
        const total = calculation.calculate(mock.IgbBerhad,cart);

        assert.equal(total,1519.96)
    })

    it("Calculate Mah Sing Group based on user established on question", () => {
        const cart = { standardAd:5 , featureAd:3 , premiumAd:4 };
        const total = calculation.calculate(mock.IgbBerhad,cart);

        assert.equal(total,3838.88)
    })
});
