import { propertyForSaleArr } from '/Projects/Mini Js Projects/Super Challange/properties/propertyForSaleArr.js'
import {placeholderPropertyObj} from '/Projects/Mini Js Projects/Super Challange/properties/placeholderPropertyObj.js'



function getPropertyHtml(propertyarr = [placeholderPropertyObj] ) {
    return propertyarr.map(property => {
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image
        } = property
        const totalRoomSizeM2 = roomsM2.reduce((total,current) => total + current )
        return `<section class="card">
            <img src="/Projects/Mini Js Projects/Super Challange/images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP}</h3>
                <p>${comment}</p>
                <h3> ${totalRoomSizeM2} m&sup2; </h3>
            </div>
            </section>`
    
}).join('') 

}


document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)