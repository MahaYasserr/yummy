// sidemenu

$(".open").click(()=>{
    if ($(".side-menu").css("left")=="0px") {
        $(".side-menu").animate({left: -290},500)
        $(".links li").animate({top:300},500)
    
    
    }else{
        $(".side-menu").animate({left: 0},500)
        $(".links li").animate({top:0},500)
    }
})



// main page
let data = [];

async function getFoodData(term) {
    let foodResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    let foodData = await foodResponse.json();
    data = foodData.meals;
    console.log(data);
    displayData(data);
}
getFoodData('')


function displayData(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-3 gy-2">
                <div onclick="getRecipeData('${arr[i].idMeal}')" class="bg-info position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strMeal}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}




// category page
let catdata = [];

async function getcatData() {
    let foodResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let foodData = await foodResponse.json();
    catdata = foodData.categories;
    console.log(catdata);
    displaycat(catdata);
}



function displaycat(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-3 gy-2">
                <div onclick="getcatMeals('${arr[i].strCategory}')"  class=" position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strCategoryThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strCategory}</p>
                    <p>${arr[i].strCategoryDescription}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}


//get cat meals
let catmeals = [];

async function getcatMeals(categoryy) {
    let foodResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryy}`);
    let foodData = await foodResponse.json();
    catmeals = foodData.meals;
    console.log(catmeals);
    displaycatMeals(catmeals);
}

function displaycatMeals(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-3 gy-2">
                <div onclick="getRecipeData('${arr[i].idMeal}')"  class=" position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strMeal}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}




// area page

let areadata = [];

async function getareaData() {
    let foodResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    let foodData = await foodResponse.json();
    areadata = foodData.meals;
    console.log(areadata);
    displayareaData(areadata);
}



function displayareaData(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div onclick="getareaMeals('${arr[i].strArea}')" class="col-md-3 h2  text-center m-4">
                <i class="text-white fa-solid fa-house"></i>
                <p class="text-white">${arr[i].strArea}</p>
            </div>`;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}

//get area meals
let areameals = [];

async function getareaMeals(categoryy) {
    let foodResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${categoryy}`);
    let foodData = await foodResponse.json();
    areameals = foodData.meals;
    console.log(areameals);
    displayareaMeals(areameals);
}

function displayareaMeals(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-3 gy-2">
                <div onclick="getRecipeData('${arr[i].idMeal}')"  class=" position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strMeal}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}




// ingredients page

let ingdata = [];

async function getIngData() {
    let foodResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    let foodData = await foodResponse.json();
    ingdata = foodData.meals;
    console.log(ingdata);
    displayIngData(ingdata);
}



function displayIngData(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div onclick="getingMeals('${arr[i].strIngredient}')" class=" col-md-3 h2  text-center m-4">
                <i class="fa-solid text-white fa-drumstick-bite"></i>
                <p class="text-white">${arr[i].strIngredient}</p>
            </div>`;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}

//get ingredients meals

let ingmeals = [];

async function getingMeals(categoryy) {
    let foodResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${categoryy}`);
    let foodData = await foodResponse.json();
    ingmeals = foodData.meals;
    console.log(ingmeals);
    displayingMeals(ingmeals);
}

function displayingMeals(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-3 gy-2">
                <div onclick="getRecipeData('${arr[i].idMeal}')"  class=" position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strMeal}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}


// food recipes


async function getRecipeData(mealID){
    let foodResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    let foodData= await foodResponse.json()
    recipedata = foodData.meals
    console.log(recipedata);
    displayRecipeData(recipedata)
    
    
}



function displayRecipeData(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-4">
            <img class="w-100" src="${arr[i].strMealThumb}" alt="" />
            <p>${arr[i].strMeal}</p>
          </div>
          <div class="col-md-8">
            <h2 >Instructions:</h2>
            <p id="recipe">
            ${arr[i].strInstructions}
            </p>
            <h2>Area:</h2>
            <p id="area">${arr[i].strArea}</p>
            <h2>category:</h2>
            <p id="category">${arr[i].strCategory}</p>
            <h2>recipes</h2>
            <div>
              <div class=" border border-2 border-black rounded">
                  <p>Lorem, ipsum.</p>
              </div>
            </div>
            <h2>Tags:</h2>
            <p id="tags">${arr[i].strTags}</p>
          </div>`;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}

//searchbyname



function search(){
    document.getElementById("foodImgs").innerHTML=
    `<div class="cold-md-6 w-50 d-flex justify-content-center">
<input oninput="searchname(this.value)" class="w-100 " id="searchInput" placeholder="search by name" type="text">
</div>
<div class="cold-md-6 w-50 d-flex justify-content-center">
<input oninput="searchletter(this.value)" id="letter" class="w-100" placeholder="search by first letter" class="" type="text">
</div>`
}

async function searchname(x){
    let foodResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
    let foodData= await foodResponse.json()
    recipedata = foodData.meals
    displaysearchData(recipedata)
    // displayRecipeData(recipedata)
    
    
}

function displaysearchData(arr) {
   
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        
        <div class="col-md-3 gy-2">
                <div onclick="getRecipeData('${arr[i].idMeal}')" class="bg-info position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strMeal}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}


//searchbyletter





async function searchletter(x){
    let foodResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`)
    let foodData= await foodResponse.json()
    recipedata = foodData.meals
    displayletterData(recipedata)
    // displayRecipeData(recipedata)
    
    
}

function displayletterData(arr) {
   
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        
        <div class="col-md-3 gy-2">
                <div onclick="getRecipeData('${arr[i].idMeal}')" class="bg-info position-relative overflow-hidden item">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                    <div class="layer position-absolute">
                    <p>${arr[i].strMeal}</p>
                </div>
                </div>
            </div>
        `;
    }
    document.getElementById("foodImgs").innerHTML = cartona;
}



