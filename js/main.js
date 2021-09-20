const image = "images/menu-item0.png";
const image1 = "images/menu-item2.png";
const image3 = "images/menu-item4.png";
const image4 = "images/menu-item5.png";
const image6 = "images/menu-item7.png";
const image7 = "images/menu-item8.png";
const pizza = document.getElementById("pizza");
const modal_content = document.getElementById("modal_content");
const data = [
    {
        name: "CHICKEN SUPREME",
        image: image,
        small_price: 5500,
        medium_price: 50000,
        big_price: 65000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut?"
    },
    {
        name: "BEEF BBQ",
        image: image6,
        small_price: 5500,
        medium_price: 50000,
        big_price: 65000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut?"
    },
    {
        name: "VEGGIE TIKKA",
        image: image1,
        small_price: 5500,
        medium_price: 50000,
        big_price: 65000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut?"
    },
    {
        name: "FETA AND VEGGIE",
        image: image4,
        small_price: 5500,
        medium_price: 50000,
        big_price: 65000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut?"
    },
    {
        name: "PEPPERONI",
        image: image7,
        small_price: 5500,
        medium_price: 50000,
        big_price: 65000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut?"
    },
    {
        name: "TROPICAL VEGGIE",
        image: image3,
        small_price: 5500,
        medium_price: 50000,
        big_price: 65000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aut?"
    },
]
let indexpizza;
const loadpizza = () => {
    pizza.innerHTML = "";

    data.map((value, index) => {
        let items = document.createElement("div");
        items.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
        items.innerHTML = `
        <div class="h-100 p-2" id="menuItem">
        <div class="w-100 d-flex align-items-center justify-content-center">
              <img class="pizza_img" src="${value.image}" alt="an image of menu item3" width="98%">
        </div>
            <div class="">
                <p class="pizza_title mb-2">${value.name}</p>
                <p class="pizza_desc">${value.description}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <p class="pizza_price mb-0"><span>${value.small_price}</span> so'm</p>
                <button class="btn pizza_btn" onclick="filterpizza(${index})" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Tanlash </button>
            </div> 
      </div>
        `;
        pizza.appendChild(items);
    })
}
loadpizza();

const filterpizza = (index) => {
    // console.log(index, size_price);
    let filterdata = data[index];
    modal_content.innerHTML = `
    <div class="modal-body">
    <div class="row">
            <div class="col-md-7">
                <div class="d-flex justify-content-center align-items-center w-100 modal_pizza_img">
                    <img class="w-75 pizza_img" id="pizza_img" src="${filterdata.image}" />
                </div>
            </div>
            <div class="col-md-5">
                <p class="modal_pizza_title"> PIZZA "${filterdata.name}"</p>
                <p class="pizza_size_sm" id="pizza_size_sm">30sm, 740gr</p>
                <p class="modal_pizza_desc">${filterdata.description}</p>
                <div class="d-flex align-items-center justify-content-between pizza_size_div">
                    <div class="d-flex justify-content-center align-items-center btn_size">
                    <label for="size_pizza1" class="w-100 d-flex align-items-center justify-content-center m-0">Small</label>
                    <input type="checkbox"
                     class=" visually-hidden"
                       id="size_pizza1"
                         onclick="pizzasize(50,  ${index})" />
                    </div>
                    <div class="d-flex justify-content-center align-items-center btn_size size_active ">
                    <label for="size_pizza2" class="w-100 d-flex align-items-center justify-content-center m-0">Medium</label>
                    <input type="checkbox"
                     class=" visually-hidden"
                     id="size_pizza2" onclick="pizzasize(75,  ${index})" />
                    </div>
                    <div class="d-flex justify-content-center align-items-center btn_size ">
                    <label for="size_pizza3"  class="w-100 d-flex align-items-center justify-content-center m-0">Large</label>
                    <input type="checkbox"
                     class=" visually-hidden"
                    id="size_pizza3" onclick="pizzasize(100, ${index})" />
                    </div>
                </div>
                <div class="row">
                <div class="col-12">
                <p class="fw-bold mb-2" >Add to pizza</p>
                </div>
                <div class="pizza_add col-4 p-2" >
                    <button class="add_pizza_btn" onclick="add_pizza_btn(0)">
                    <img class="image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA" /> 
                    <h2 class="title">Острый халапеньо</h2>
                    <div>   
                          <span class="money__value">4000</span><span class="money__value"> сум</span>
                    </div>
                    </button>
                       </div>
                        <div class="pizza_add col-4 p-2">
                        <button class="add_pizza_btn" onclick="add_pizza_btn(1)">
                        <img class="image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA" /> 
                        <h2 class="title">Острый халапеньо</h2>
                        <div>   
                            <span class="money__value">4000</span><span class="money__value"> сум</span>
                        </div>
                          </button>
                        </div>
                        <div class="pizza_add  col-4 p-2">
                        <button class="add_pizza_btn" onclick="add_pizza_btn(2)">
                        <img class="image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA" /> 
                        <h2 class="title">Острый халапеньо</h2>
                       <div>   
                          <span class="money__value">4000</span><span class="money__value"> сум</span>
                    </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
      <!-- <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Ortga qaytish</button> -->
      <button type="button" class="btn booking_btn" id="booking_btn">Buyurtma berish ${filterdata.medium_price}</button>
    </div>
    `;

}

let active;
const pizzasize = (size, index) => {
    let pizzadata = data[index]
    const pizza_size = document.querySelectorAll(".btn_size");
    console.log(pizza_size);
    for (let i = 0; i < 3; i++) {
        const element = pizza_size[i];
        console.log(pizza_size.length);
        element.classList.remove("size_active");
    }
    if (size == 50) {
        pizza_img.classList.add("w-50");
        pizza_img.classList.remove("w-100", "w-75");
        pizza_size_sm.innerHTML = "25sm, 520gr";
        pizza_size[0].classList.add("size_active");
        booking_btn.innerHTML = `Buyurtma berish ${pizzadata.small_price}`;
    } else if (size == 75) {
        pizza_img.classList.add("w-75");
        pizza_img.classList.remove("w-50", "w-100");
        pizza_size_sm.innerHTML = "30sm, 740gr";
        pizza_size[1].classList.add("size_active");
        booking_btn.innerHTML = `Buyurtma berish ${pizzadata.medium_price}`;
    } else if (size == 100) {
        pizza_img.classList.add("w-100");
        pizza_img.classList.remove("w-75", "w-50");
        pizza_size_sm.innerHTML = "35sm, 960gr";
        pizza_size[2].classList.add("size_active");
        booking_btn.innerHTML = `Buyurtma berish ${pizzadata.big_price}`;
    }
}

// const add_pizza_btn = document.querySelectorAll(".add_pizza_btn");

const add_pizza_btn = (id) => {
    const add_pizza_btn = document.querySelectorAll(".add_pizza_btn");
    let element = add_pizza_btn[id];
    active = element.children[2].children[0].innerHTML;
    if (element?.classList[1] == "active_Add_pizza") {
        element.classList.remove("active_Add_pizza");
    } else {
        element.classList.add("active_Add_pizza");
    }
}

