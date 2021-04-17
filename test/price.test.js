const calculation =  require("../index");
const assert = require('assert');

/**
* The following testing are to ensure each function on calculation based on type 
* of promo @ discount are returning correct value based on promo type and their price.
* which the function is : -
* 1 . calculateNormalPrice ( No promotion set)
* 2 . calculateFreeItem ( Promo that you can buy 3 for 2 Item which is basically if you buy 3 you get free 1)
* 3 . calculateSpecialPrice ( Promo that already set the ype of product will be price as of it , without minimum purchase)
* 4 . calculateDiscountPerItem ( Promo when you buy more than certain amount , you will get new price per ads )
*/

describe('Calculate Normal Price', function() {
    it('Calculate normal price where it is (RM269.99) and total item is 3', () => {
        const total = calculation.calculateNormalPrice(3,269.99);
        assert.equal(total,809.97)
    })
    it('Calculate normal price where it is (RM269.99) and total item is 0', () => {
        const total = calculation.calculateNormalPrice(0,269.99);
        assert.equal(total,0)
    })
});

describe('Calculate Price For Promo With Free Item ( 3 For 2 Deals ) RM269.99 per ads', function() {

    const userPromo = {
        minPurchase:2,
        discountPricePerAds:269.99
    }

    it('Total purchase 4' , () => {
        const total = calculation.calculateFreeItem(4,269.99,userPromo);
        assert.equal(total,809.97)
    })

    it('Total purchase 3' , () => {
        const total = calculation.calculateFreeItem(3,269.99,userPromo);
        assert.equal(total,539.98)
    })

    it('Total purchase 2' , () => {
        const total = calculation.calculateFreeItem(2,269.99,userPromo);
        assert.equal(total,539.98)
    })

    it('Total purchase 3' , () => {
        const total = calculation.calculateFreeItem(1,269.99,userPromo);
        assert.equal(total,269.99)
    })
});


describe('Calculate Price For Promo For Advertisement That Drop To Specific Price (Price Drop to RM250.00 Per Ads)', function() {

    const userPromo = {
        minPurchase:0,
        discountPricePerAds:250.00
    }

    it('Total purchase is 3' , () => {
        const total = calculation.calculateSpecialPrice(3,userPromo);
        assert.equal(total,750.00)
    })

    it('Total purchase is 2' , () => {
        const total = calculation.calculateSpecialPrice(2,userPromo);
        assert.equal(total,500.00)
    })

    it('Total purchase is 1' , () => {
        const total = calculation.calculateSpecialPrice(1,userPromo);
        assert.equal(total,250.00)
    })
});

describe('Calculate Price For Promo That Where You Buy More , The Price Per Ad Will Change , RM394.99 Per Ads', function() {

    const userPromo = {
        minPurchase:4,
        discountPricePerAds:379.99
    }

    it('Total purchase is more than 4' , () => {
        const total = calculation.calculateDiscountPerItem(5,394.99,userPromo);
        assert.equal(total,1899.95)
    })

    it('Total purchase is equal to 4' , () => {
        const total = calculation.calculateDiscountPerItem(4,394.99,userPromo);
        assert.equal(total,1519.96)
    })

    it('Total purchase is less than 4' , () => {
        const total = calculation.calculateDiscountPerItem(3,394.99,userPromo);
        assert.equal(total,1184.97)
    })
});

