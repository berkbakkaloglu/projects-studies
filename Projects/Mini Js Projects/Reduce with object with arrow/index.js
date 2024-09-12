import { itemsBoughtArr } from '/Projects/Mini Js Projects/Reduce with object with arrow/itemsBoughtArr.js'

function calculateTotalCost(itemsBoughtArr, discount = 0) {

    const total = itemsBoughtArr.reduce((total, currentItem) => {
        return total + currentItem.priceUSD
    }, 0
    )
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr, 10))