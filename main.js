    let cakeInStock = true;  
    const cakeSubmit = document.querySelector("#cake-submit");
        cakeSubmit.addEventListener("click", (event) =>{
            cakeInStock = !cakeInStock;
                cakeInStock ?
                    cakeSubmit.innerText = "In Stock"
                    :   
                    cakeSubmit.innerText = "Out of Stock"

                   
        })

    let brownieInStock = true;
    const brownieSubmit = document.querySelector("#brownie-submit");
        brownieSubmit.addEventListener("click", (event) =>{
            brownieInStock = !brownieInStock;
                brownieInStock ?
                brownieSubmit.innerText = "In Stock"
                :
                brownieSubmit.innerText = "Out of Stock"
        })

    let cookieInStock = true;
    const cookieSubmit = document.querySelector("#cookie-submit");
        cookieSubmit.addEventListener("click", (event) =>{
            cookieInStock = !cookieInStock;
            cookieInStock ?
            cookieSubmit.innerText = "In Stock"
            :
            cookieSubmit.innerText = "Out of Stock"
        })