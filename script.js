// 1. Oyunun Başlangıç Ayarları
// - 1 ile 100 arasında rastgele bir sayı üret ve sakla. Bu sayı, oyuncunun tahmin etmesi gereken sayıdır.
// - Oyuncunun başlangıç puanını 10 olarak ayarla. Her yanlış tahminde, puan 1 azalacak.

// 2. Kullanıcı Arayüzünü Kur
// - Kullanıcının tahminlerini girebileceği bir metin giriş alanı yerleştir.
// - Tahminleri kontrol etmek için bir "Kontrol Et" butonu ekle.
// - Oyuncunun mevcut puanını ve en yüksek puanını gösterecek alanlar oluştur.
// - Oyuncuya ipuçları vermek, kazanma veya kaybetme durumlarını bildirmek için bir mesaj bölümü oluştur.

// 3. "Kontrol Et" Butonuna Events Ekle
// - Butona tıkladığında, kullanıcının girdiğini sayıya çevir ve bu sayıyı rastgele üretilen sayı ile karşılaştır.
// - Kullanıcı sayı girmeden butona bastığında uyarı mesajı göster.

// 4. Tahmin Kontrolü ve Puan Güncellemesi (if-else)
// - Kullanıcının tahmini doğru ise, kazandığını belirten bir mesaj göster ve arka plan rengini değiştir.
// - Tahmin yanlış ise ve puan hala 0' dan büyük ise, kullanıcının tahminini yükseltmesi veya düşürmesi gerektiğini belirten bir ipucu ver ve puanı 1 azalt.
// - Puan 0'a düşerse, oyunun bittiğini ve kullanıcının kaybettiğini belirten bir mesaj göster.

// 5. En Yüksek Puanı Sakla ve Güncelle
// - Oyun bittiğinde, mevcut puanı yerel depolamada saklanan en yüksek puan ile karşılaştır.
// - Mevcut puan daha yüksekse, en yüksek puanı güncelle ve kullanıcı arayüzünde göster.

// 6. Oyunu Yeniden Başlatma Fonksiyonelliği
// - Oyuncunun oyunu yeniden başlatabilmesi için bir "Tekrar" butonu ekle.
// - Bu butona basıldığında, oyunun başlangıç değerlerini (rastgele sayı, puan) sıfırla, mesajları temizle ve arka plan rengini varsayılana döndür.

// 7. Giriş Alanına Klavye Events i Ekle
// - Kullanıcı, metin kutusuna bir sayı girdikten sonra "Enter" tuşuna basarak tahminini gönderebilmeli.
// - "Enter" tuşuna basıldığında, "Kontrol Et" butonunun işlevselliğini tetikleyecek bir olay dinleyici ekle.

//? ÇÖZÜM

//?  1-100 arasında rastgele bir sayı tut
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//?  variables (değişkenler)
let score = 10;
// let topScore = 0; //*değerin taracıyıcıda tutulması için local storage de atama yapmalıyız

//?  localStorage da  topScore adıyla bir değişken oluştur
let topScore = localStorage.getItem("topScore") || 0; 

//? DOM daki top-score değerini localStorage dan okuyarak güncelle
document.querySelector(".top-score").textContent = topScore;

document.querySelector(".check-btn").addEventListener("click", () => {
  //?  gerekli değişkenleri tanımla
  const guessInput = Number(document.querySelector(".guess-input").value);
  const message = document.querySelector(".message");
  const body = document.querySelector("body");
  const checkBtn = document.querySelector(".check-btn");
  //? eger input girilmediyse kullanıcıya uyarı ver
  if (!guessInput) {
    message.innerText = "plase enter a number";
  }

  //? eger rastgeleSayı == input.value
  else if (randomNumber === guessInput) {
    message.innerText = "congrats you win"; //* ekrana yazdırıyoruz
    body.className = "bg-success"; // * body a clas atayıp bc eklendi
    checkBtn.disabled = true; //* check butonunu kapatıyor again e tıklandığında açılıyor
    if (score > topScore) {
      //? localstorage deki topscore degerini güncelle
      localStorage.setItem("topScore", score);

      //? DOM daki topscore değerini de güncelle
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } //? eger rastgeleSayı =/= input.value
  else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (message.innerText = "decrease")
        : (message.innerText = "increase");
    } else {
      message.innerText = "you lost";
      body.className = "bg-danger";
      checkBtn.disabled = true;
      document.querySelector(".secret-number").textContent = randomNumber; 
    }

    document.querySelector(".score").textContent = score ; //? dom a yazdırmak için

  }
});
//? again butonuna basıldıgında oyunu yeniden baslangıc degerine getir
document.querySelector(".again-btn").addEventListener("clikc" , () => {
    score = 10;
    document.querySelector(".score").textContent = score ; //?dom a yazdırmak için
    document.querySelector(".check-btn").disabled = false 
    randomNumber = Math.round(Math.random() * 100);
    document.querySelector(".scret-number").textContent = "?";
    document.querySelector(".message").innerText = "starting";
    document.querySelector(".guess-input").value = "";
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
});

//? klavye enter ile çalıştırma
document.querySelector(".guess-input").addEventListener("keydown" , (e) =>{
    // console.log(e.code == "enter");
    if(e.code == "enter") {
        document.querySelector(".check-btn").click();
    }
});

