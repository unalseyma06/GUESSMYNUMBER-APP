// //! local storge

// //? veri saklama

// localStorage.setItem("key" , "value")
// localStorage.setItem("name" , "talha")
// localStorage.setItem("name1" , "ali")
// localStorage.setItem("name2" , "ahmet")
// localStorage.setItem("surname" , "akça")
// localStorage.setItem("surname1" , "yalı")
// localStorage.setItem("key1" , "talha")


// //?veri okuma

// let kullanıcı = localStorage.getItem("surname")
// console.log(kullanıcı);

// //?veri silme

// localStorage.removeItem("key")
// localStorage.removeItem("name")

// //? verilerin tamamını silme

// localStorage.clear()

// //? örnk KULLANICI adını inputa girsin. gönder butonuna tıkladığında veri local storage de saklansın. kullanıcı çağır butanuna tıklayınca girilen isim console da yazdırılsın

// document.getElementById("btnSet").addEventListener("click" , () =>{
//     const input = document.getElementById("input")
//     localStorage.setItem("name" , input.value)
// } )
//  document.getElementById("btnGet").addEventListener("click" , () => {
//    console.log(localStorage.getItem("name")); 
    
//  })

//  //? örnk bir alışveriş sepetindeki ögeleri local storge de saklayınız daha sonra bu veriyi saklayın


// let sepet = ["elma" , "çilek" , "muz" , "kayısı" ] 

// localStorage.setItem("sepet" , JSON.stringify(sepet))   // *json.stringify array gönderme

// console.log( localStorage.getItem("sepet")) //*arry olarak çağırma

// let localSepet = localStorage.getItem("sepet") //*okuma

// console.log(JSON.parse(localSepet)); //*çağırma
















