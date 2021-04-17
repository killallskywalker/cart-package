/**
* Mock data for mocking promo type 
*/

exports.freeItemPromo = {
    discountType: "free_item",
    minPurchase: 5,
    discountPricePerAds: 269.99 
};

exports.specialPrice = {
    discountType: "special_price",
    minPurchase: 0,
    discountPricePerAds: 309.99 
}

exports.discountPerItem = {
    discountType: "discount_per_item",
    minPurchase: 3,
    discountPricePerAds: 389.99
}

exports.noPromo = {
    name: "Premium Ad",
    price: 394.99,
    userPromo: null
}
