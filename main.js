let cakeInStock = true;  
const cakeSubmit = document.querySelector("#cake-submit");
    cakeSubmit.addEventListener("click", (event) =>{
        cakeInStock = !cakeInStock;
            cakeInStock ?
                cakeSubmit.innerText = "In Stock"
                :   
                cakeSubmit.innerText = "Out of Stock"
                   
    });

let brownieInStock = true;
const brownieSubmit = document.querySelector("#brownie-submit");
    brownieSubmit.addEventListener("click", (event) =>{
        brownieInStock = !brownieInStock;
            brownieInStock ?
                brownieSubmit.innerText = "In Stock"
                :
                brownieSubmit.innerText = "Out of Stock"
    });

let cookieInStock = true;
const cookieSubmit = document.querySelector("#cookie-submit");
    cookieSubmit.addEventListener("click", (event) =>{
        cookieInStock = !cookieInStock;
            cookieInStock ?
                cookieSubmit.innerText = "In Stock"
                :
                cookieSubmit.innerText = "Out of Stock"
    });

const coconutCake = document.querySelector(".cake");
const removeCake = document.querySelector("#cake-remove");
    removeCake.addEventListener("click", (event) =>{
        coconutCake.remove()
    });

const marbleBrownie = document.querySelector(".brownies");
const removeBrownie = document.querySelector("#brownie-remove");
    removeBrownie.addEventListener("click", (event) =>{
        marbleBrownie.remove()
    });

const rockyRoadCookies = document.querySelector(".cookies");
const removeCookies = document.querySelector("#cookie-remove");
    removeCookies.addEventListener("click", (event) => {
        rockyRoadCookies.remove()
    });
