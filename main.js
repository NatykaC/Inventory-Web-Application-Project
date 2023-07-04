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
const existingProductsPage = document.querySelector(".new-product");
const addNewSweetTreat = document.querySelector("#new-addition");
    addNewSweetTreat.addEventListener("submit", (event) =>{
        event.preventDefault();
        const newSweetTreatName = document.createElement("h4");
            newSweetTreatName.innerText = event.target["add-treat"].value
                existingProductsPage.append(newSweetTreatName)
        const newSweetTreatImage = document.createElement("img");
            newSweetTreatImage.setAttribute("src", event.target["add-treat-image"].value) 
            newSweetTreatImage.setAttribute("height", "100")
            newSweetTreatImage.setAttribute("width", "100")
                existingProductsPage.append(newSweetTreatImage)  
        const newSweetTreatPrice = document.createElement("p");
            newSweetTreatPrice.innerText = event.target["add-treat-price"].value
                existingProductsPage.append(newSweetTreatPrice)
        event.target.reset();
    });
const resetButton = document.querySelector("#reset-form");
    resetButton.addEventListener("submit", (event) =>{
    resetButton.reset()
    });
const cakePicture = document.querySelector("#whole-cake");
    cakePicture.addEventListener("click", (event) =>{
        const cakeSection = document.querySelector(".cake");
        const cakeInfoSection = document.createElement("section");
        cakeInfoSection.innerText = "Calories per slice: 399"
        cakeSection.append(cakeInfoSection)
    });
const browniePicture = document.querySelector("#dozen-brownies");
    browniePicture.addEventListener("click", (event) =>{
        const brownieSection = document.querySelector(".brownies");
        const brownieInfoSection = document.createElement("section");
        brownieInfoSection.innerText = "Calories per brownie: 250"
        brownieSection.append(brownieInfoSection)
    });
const cookiePicture = document.querySelector("#dozen-cookies");
    cookiePicture.addEventListener("click", (event) =>{
        const cookieSection = document.querySelector(".cookies");
        const cookieInfoSection = document.createElement("section");
        cookieInfoSection.innerText = "Calories per cookie: 320"
        cookieSection.append(cookieInfoSection)
    });
    

