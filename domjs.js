
const h1 =document.querySelector("#header1")
console.log(h1);

h1.onmouseover = () => {
    console.log("baslık üzerindesiniz");
    h1.style.color = "red"
    h1.style.fontSize = "100px"
}

h1.onmouseout = () => {
    console.log("baslıktan ayrıldınız");
    h1.style.color = "black"
    h1.style.fontSize = "1rem"
}

h1.addEventListener("click" , () => {
    alert("başlığa tıkladınız")
})


//? örnek 
document.getElementById("btn").addEventListener("click" , () => {
    const input = document.getElementById("input")
    if(input.value) alert (`girdiğiniz değer => ${input.value}`) ;
    else alert(`giriş yapılmadı`)
})

//?örnek
