//1) Stokları 500 kg'ın üzerinde olan balıkların isimleri nelerdir?
export function stokları500kgUzerinde(fishFarm) {
  return fishFarm
    .filter((fish) => fish.stockVolumeInKg > 500)
    .map((fish) => fish.fishType);
}

// //2) 9 Fr arasında fiyat aralığına sahip balıklar nelerdir? ve 12 Fr?
 export const frankaraligi9ve12 = (fishFarm) => {
   return fishFarm.filter((fish) => fish.price >= 9 && fish.price < 12).map((fish) => fish.fishType);
 };

// //3) Hangi balıklar sadece Bern'de ve sadece kış mevsiminde satılır?
 export const winterBern = (fishFarm) => {
 return fishFarm.map(
   (fish) => fish.season === "Winter" && fish.saleLocations.includes === "BE").map((fish) => fish.fishType);
 };

// //4) Avrupa Birliği'nden (AB) 10Fr'den daha ucuza mal olan balıkları alfabetik sırayla listeleyin.
export const aB10frucuzsiralaAz = (fishFarm) => {
  return fishFarm.filter(
    (fish) =>
      (fish.originCountry == "France" ||
        fish.originCountry == "Poland" ||
        fish.originCountry == "Italy" ||
        fish.originCountry == "Spain" ||
        fish.originCountry == "GREECE") &&
      fish.price < 10
  );
};

// // //5) Toplam balık stoğu nedir?
export const totalStok = (fishFarm) => {
  return fishFarm
    .filter((fish) => fish.saleLocations)
    .map((fish) => fish.stockVolumeInKg)
    .reduce((a, b) => a + b);
};

// // //6) Balıkları son kullanma tarihlerine göre listeleyin (son kullanma tarihi yaklaşan balıklar önce listelenmelidir).
 export const sonKullanmatarihi = () => {};
export const findTheExpirationDate = (fishFarm) => {
  return fishFarm
    .filter((fish) => fish.saleLocations)
    .map((fish) => fish.entryDate)
    .sort((a, b) => b - a);
};

// // //7) En pahalı balık hangisidir?

 export const enPahaliBalik = (fishFarm) => {
   return fishFarm.reduce((max, min) => (max.price > min.price ? max : min));
 };

// // //8) En uzun süre dayanabilen balıklar hangi ülkeden gelmektedir?
 export const enUzunDayanabilen = (pArray) =>
   pArray
     .sort((fish1, fish2) => fish2.durationInDays - fish1.durationInDays)
     .filter((fish) => fish.durationInDays === pArray[0].durationInDays)
     .map((fish) => fish.originCountry);

// // //9) Romandiya'da kış ve sonbahar mevsiminde satılan balıkların ortalama fiyatı nedir?
//   // const romandyCantons = ["VD" , "GE" , "NE"] ;
   const fishPriceArray = pArray
     .filter(
       (fish) =>
       (fish.season === "Winter" || fish.season === "Autumn") &&
        fish.saleLocations.includes("VD" || "GE" || "NE")
    )
     .map((fish) => fish.price);
 return (
  fishPriceArray.reduce((total, fish) => total + fish) / fishPriceArray.length
 );

// // //10) Ticino Kantonu için stokta kaç balık var?
export const ticinoTotalStock = (fishFarm) =>
  fishFarm
    .filter((fish) => fish.saleLocations.includes("TI"))
    .map((fish) => fish.stockVolumeInKg)
    .reduce((a, b) => a + b);

// // //11) Yaz sezonundan, AB dışından gelen ve ZH'de satılan balıkların ortalama ağırlığını bulun?
export const yazSezonuABdisiZHstailanBalikOrtalamasi = (pArray) => {
  const outsideEU = ["Japan", "United Kingdom", "Egypt", "Vietnam"];
  const fishWeightList = pArray
    .filter(
      (fish) =>
        outsideEU.includes(fish.originCountry) &&
        fish.saleLocations.includes("ZH") &&
        fish.season === "Summer"
    )
    .map((fish) => fish.itemWeightInGrams);
}; return (
   fishWeightList.reduce((fish, fish1) => fish + fish1) / fishWeightList.length
 );
