let elSelectQan = document.querySelector("#pitsa-select") //! select

let elNoni = document.querySelector(".span-noni") //! for textContent
let elKota = document.querySelector(".span-kota")
let elUst = document.querySelectorAll(".span-ust")
let elQoshim = document.querySelectorAll(".span-qoshim") 

let elRound1 = document.querySelectorAll(".pitsa__left__wrap-size__1")  //! size
let elRound2 = document.querySelectorAll(".pitsa__left__wrap-size__2") 
let elRound3 = document.querySelectorAll(".pitsa__left__wrap-size__3") 
let orderbutton = document.querySelector("#orderbutton")
let elActivQosh = document.querySelectorAll(".activ-qosh")
let elActivUst = document.querySelectorAll(".active-ust")

let wrapSize = document.querySelector("#wrap-size-1")
let wrapSize2 = document.querySelector("#wrap-size-2")
let wrapSize3 = document.querySelector("#wrap-size-3")

wrapSize.addEventListener("click", (e)=>{
  elKota.textContent = e.target.value
})

wrapSize2.addEventListener("click", (e)=>{
  elKota.textContent = e.target.value
})

wrapSize3.addEventListener("click", (e)=>{
  elKota.textContent = e.target.value
})
//! noni function
elSelectQan.addEventListener("change", ()=>{
  elNoni.textContent = elSelectQan.value
})


// ! size function
// for (let i = 0; i < array.length; i++) { 
//     if (i == [0]) {
//       console.log("ok");
//     }
// }

//! things function
for (let i = 0; i < elActivUst.length; i++) {
  elActivUst[i].addEventListener("click", (evt) =>{
    if (elActivUst[i].checked) {
      elUst[i].textContent = evt.target.value 
    } else{ 
      elUst[i].textContent = ""
    } 
  })
}


//! qoshimcha function
for (let i = 0; i < elActivQosh.length; i++) {
  elActivQosh[i].addEventListener("click", (evt) =>{
    if(elActivQosh[i].checked){
      elQoshim[i].textContent = evt.target.value
    }else{ 
      elQoshim[i].textContent = ""
    }
  })

}


const NameSurname = document.querySelector("#Surname")
const Name = document.querySelector("#Name")
const Region = document.querySelector("#region")
const SurnameInput = document.querySelector("#surnameInput")
const NameInput = document.querySelector("#name")
const RegionInput = document.querySelector("#addressInput")
const selectBread = document.querySelector(
"#select-bread")
const pisaSize = document.querySelector(
  "#pisa-size")
  const pisaMaterial = document.querySelectorAll(
    "#pisa-material")
    const pisaAddition = document.querySelectorAll(
      "#pisa-additions")

orderbutton.addEventListener("click" ,()=>{
  NameSurname.textContent =  SurnameInput.value
  Name.textContent =  NameInput.value
  Region.textContent = RegionInput.value
  pisaSize.textContent = elKota.textContent
  selectBread.textContent = elNoni.textContent

  for (let i = 0; i < elQoshim.length; i++) {
    pisaAddition[i].textContent = elQoshim[i].textContent
  } 
  for (let i = 0; i < elUst.length; i++) {
    pisaMaterial[i].textContent = elUst[i].textContent
  } 

})