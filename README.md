### Features

- Calculate total price of the cart including the promo that already configured . This package only work for my project only . Somehow if anyone feels it can be used this is how to use it . 

# Installation 

`npm i killallskywalker-mycart `

# Usage

```
const { calculate } = require("killallskywalker-cart");

const carts = { standardAd: 1 , featureAd:1 , premiumAd:1 }

const advertisements = [
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

const price = calculate(advertisements,carts);
```

###End