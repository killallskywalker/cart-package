/**
* Mock data for total price for cart of advertisement type . 
* To add new mock data and test on different scenarion , can add another 
* data to be run in the test . The naming is based on sample user that provide
* exercise . 
* sample data
* {
    name: "Standard Ad " - ad type name only can be in ["Standard Ad" , "Feature Ad" , "Premium Ad"]
    price: 100 - any price
    userPromo: null ( if no any promo )
    userPromo: { 
       discountType: "free_item", - discount type only can be in ["free_item" , "special_price" , "discount_per_item" ]
       minPurchase: 2,
       discountPricePerAds: 269.99 
    } ( if theres any promo just define in here)
  }
*/

exports.default = [
    {
        name: "Standard Ad",
        price: 269.99,
        userPromo: null
    },
    {
        name: "Featured Ad",
        price: 322.99,
        userPromo:null
    },
    {
        name: "Premium Ad",
        price: 394.99,
        userPromo:null
    }
];

exports.UemSunrise = [
    {
        name: "Standard Ad",
        price: 269.99,
        userPromo: {
            discountType: "free_item",
            minPurchase: 2,
            discountPricePerAds: 269.99 
        }
    },
    {
        name: "Featured Ad",
        price: 322.99,
        userPromo:null
    },
    {
        name: "Premium Ad",
        price: 394.99,
        userPromo:null
    }
];

exports.SimeDarby = [
    {
        name: "Standard Ad",
        price: 269.99,
        userPromo: null
    },
    {
        name: "Featured Ad",
        price: 322.99,
        userPromo: {
            discountType: "special_price",
            minPurchase: 0,
            discountPricePerAds: 299.99 
        }
    },
    {
        name: "Premium Ad",
        price: 394.99,
        userPromo:null
    }
];

exports.IgbBerhad = [
    {
        name: "Standard Ad",
        price: 269.99,
        userPromo: null
    },
    {
        name: "Featured Ad",
        price: 322.99,
        userPromo:null
    },
    {
        name: "Premium Ad",
        price: 394.99,
        userPromo: {
            discountType: "special_price",
            minPurchase: 4,
            discountPricePerAds: 379.99 
        }
    }
];

exports.Mahsing = [
    {
        name: "Standard Ad",
        price: 269.99,
        userPromo: {
            discountType: "free_item",
            minPurchase: 4,
            discountPricePerAds: 269.99 
        }
    },
    {
        name: "Featured Ad",
        price: 322.99,
        userPromo: {
            discountType: "special_price",
            minPurchase: 0,
            discountPricePerAds: 309.99 
        }
    },
    {
        name: "Premium Ad",
        price: 394.99,
        userPromo: {
            discountType: "discount_per_item",
            minPurchase: 3,
            discountPricePerAds: 389.99
        }
    }
];
