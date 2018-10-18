// ===================================
// DOM Selection
// ===================================
const orderForm = document.querySelector('[data-form]');
const placedOrder = document.querySelector('[data-placed]');


// ===================================
// Helper Functions
// ===================================
function reportErrs(err) {
    console.log("No Errors");
    return err;
}

function showOrder(coffOrd) {
    console.log(coffOrd);
    placedOrder.innerHTML += `<b>Email: </b><i>${coffOrd.emailAddress}</i><br><br>`;
    placedOrder.innerHTML += `<b>Coffee: </b><i>${coffOrd.coffee}</i><br><br>`;
    placedOrder.innerHTML += `<b>Flavor: </b><i>${coffOrd.flavor}</i><br><br>`;
    placedOrder.innerHTML += `<b>Strength: </b><i>${coffOrd.strength}</i><br><br>`;
    placedOrder.innerHTML += `<b>Size: </b><i>${coffOrd.size}</i><br><br>`;
}

function handleSubmit(event) {
    event.preventDefault();
    console.log('You get a coffee')

    console.log(event.target);
    const url = event.target.action;
    const method = event.target.method;
    const elements = event.target.elements;
    const data = {
        strength: elements.strength.value,
        flavor: elements.flavor.value,
        size: elements.size.value,
        coffee: elements.coffee.value,
        emailAddress: elements.emailAddress.value,
    };
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
    })
    .then(r => r.json())
    .catch(reportErrs)
    .then(showOrder)
    
    //debugger;
}


// ===================================
// Main Event Listeners
// ===================================
orderForm.addEventListener('submit', handleSubmit);