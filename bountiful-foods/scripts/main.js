const ctaEl = document.getElementById("cta");
const bSmoothieEl = document.getElementById("blue-smoothie");
const oSmoothieEl = document.getElementById("orange-smoothie");

ctaEl.addEventListener('mouseenter', () =>{
  bSmoothieEl.classList.add("bounce-blue");
  setTimeout(()=>{
    oSmoothieEl.classList.add("bounce-orange")
  }, 500);
});

ctaEl.addEventListener('mouseleave', () =>{
  bSmoothieEl.classList.remove("bounce-blue");
  oSmoothieEl.classList.remove("bounce-orange");
});

// drink count
let drinkCount = Number(window.localStorage.getItem("drinksMade"));
document.getElementById('drink-total').textContent = drinkCount;