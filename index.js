/**
 * @param {Integer} totalAd Total of advertisement
 * @param {Double} pricePerAd advertisement
 */
exports.calculateNormalPrice = (totalAd,pricePerAd) => {    
    const price = totalAd * pricePerAd;
    return price;
}

/**
 * @param {Integer} totalAd Total of advertisement
 * @param {Double} pricePerAd advertisement
 * @param {Object} promo object of promotion on advertisement 
 */
exports.calculateFreeItem = (totalAd,originalPrice,promo) => {  
    const price = (totalAd > promo.minPurchase) ?  originalPrice * totalAd - promo.discountPricePerAds : originalPrice * totalAd;
    return price;
}

/**
 * @param {Integer} totalAd Total of advertisement
 * @param {Object} promo object of promotion on advertisement 
 */
exports.calculateSpecialPrice = (totalAd,promo) => {
    price = promo.discountPricePerAds * totalAd;
    return price;
}

/**
 * @param {Integer} totalAd Total of advertisement
 * @param {Object} promo object of promotion on advertisement 
 */
exports.calculateDiscountPerItem = (totalAd,originalPrice,promo) => {
    price = (totalAd >= promo.minPurchase) ?  promo.discountPricePerAds * totalAd : originalPrice * totalAd;    
    return price;
} 

/**
 * @param {Array} advertisement Array of object that contain advertisements and promo related to advertisements
 * @param {Object} cart Object that contain total of cart for each type of job advertisements
 */
exports.calculate = (advertisements,cart) => {

    const { standardAd , featureAd , premiumAd  } = cart;

    let totalPrice = 0;

    advertisements.forEach((advertisement)=> {
        const originalPrice = advertisement.price;   
        const userPromo = advertisement.userPromo ? advertisement.userPromo : null

        switch (advertisement.name){
            case "Standard Ad":
                totalAdvertisement = standardAd;
                break
            case "Featured Ad":
                totalAdvertisement = featureAd;
                break
            case "Premium Ad":
                totalAdvertisement = premiumAd;
                break
            default:
                totalAdvertisement = 0;
        }

        totalPrice += this.calculateTotalAdsPrice(totalAdvertisement,originalPrice,userPromo);

    })

    return totalPrice;
}

/**
 * @param {Integer} totalAdvertisement Array of object that contain advertisements and promo related to advertisements
 * @param {Double}  originalPrice Original price for advertisement
 * @param {Object} userPromo Object containing promo to the advertisement
 */
exports.calculateTotalAdsPrice = (totalAdvertisement,originalPrice,userPromo) => {
    const discountType = userPromo ? userPromo.discountType : null;
    switch (discountType){
        case "free_item":
            price = this.calculateFreeItem(totalAdvertisement,originalPrice,userPromo)
            break
        case "special_price":
            price = this.calculateSpecialPrice(totalAdvertisement,userPromo)
            break
        case "discount_per_item":
            price = this.calculateDiscountPerItem(totalAdvertisement,originalPrice,userPromo)
            break
        default:
            price = this.calculateNormalPrice(totalAdvertisement,originalPrice)
    }

    return price;
}