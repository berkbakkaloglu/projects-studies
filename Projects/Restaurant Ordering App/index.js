import { menuArray } from '/Projects/Restaurant Ordering App/data.js'
const incrementBtn = document.getElementById("increment") 
const ordersEl = document.getElementById("orders")
const orderArray = []



document.addEventListener("click", function(e){
    if (e.target.dataset.increment){
        handleIncrementClick(e.target.dataset.increment)}
        
})

function handleIncrementClick(menuId){
    ordersEl.style.display ="flex"
    
    const targetMenuObj = menuArray.filter(function(item){
        return Number(item.id) === Number(menuId)
    })[0];
        if (targetMenuObj){
            orderArray.push(targetMenuObj);
            updateOrders();

            const orderTotal = orderArray.reduce((total,current) => total + current.price, 0);
            document.getElementById('total').innerHTML = `<p>Total: $${orderTotal.toFixed(2)}</p>`
        }
    }
function menuHtml(menu = [menuArray]) {
    return menu.map(menuitem => {
        const {
            name,
            ingredients,
            id,
            price,
            emoji,
        } = menuitem
        return `
                    <li class="list" id="list">
                        <div class="list-left" id="list-left">
                            <img class="food-logo" id="food-logo" src="${emoji}" >
                            <div>
                                <h3>${name}</h3>
                                <p class="ingredents" id="ingredents">${ingredients}</p>
                                <p class="price" id="price"> $${price}</p>
                            </div>
                        </div>
                        <button class="increment increment-text" id="increment" data-increment="${id}">+</button>
                    </li>`
   
    }).join('')
    
} 
function renderMenu(){
document.getElementById("total-list").innerHTML = menuHtml(menuArray)
}


function updateOrders(){
    let orderHtml = ''
    orderArray.forEach(item=> {
        orderHtml +=`
        <div class="single-order">
                        <p>${item.name}</p>
                        <p>$${item.price}</p>
                    </div>
        `
    })
    document.getElementById("changing-order").innerHTML = orderHtml;
    
}



renderMenu()

